import { useEffect, useState } from "react";
import { CustomButton } from "../custom-button";
import {AnimatePresence, motion} from 'framer-motion'
import { colors } from "~/constants";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 ${isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-3xl' : ''}`}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ rotate: -10, scale: 0.9 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <circle cx="16" cy="16" r="14" fill={colors.primary} fillOpacity="0.2" />
                                <circle cx="16" cy="16" r="8" fill={colors.highlight} fillOpacity="0.4" />
                                <circle cx="16" cy="16" r="4" fill={colors.primary} />
                            </svg>
                        </motion.div>
                        <h1 className="text-xl font-bold" style={{
                            textShadow: `0 0 5px ${colors.primary}`
                        }}>
                            CoopCast
                        </h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        {["Features", "How It Works", "Roadmap", "FAQ"].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 0.7, y: 0 }} // Set default opacity to 70%
                                whileHover={{ opacity: 1 }} // Set opacity to 100% on hover
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                                className="text-white transition-opacity"
                                style={{
                                    fontWeight: 600,
                                    textShadow: `0 0 2px ${colors.primary}`
                                }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block"
                    >
                        <CustomButton className="rounded-full text-sm px-6" style={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.highlight} 100%)`,
                            border: `2px solid ${colors.light}40`
                        }}>
                            Connect
                        </CustomButton>
                    </motion.div>

                    {/* Mobile menu CustomButton */}
                    <CustomButton
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </CustomButton>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden pt-4 pb-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {["Features", "How It Works", "Roadmap", "FAQ"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-white px-2 py-1 text-xl opacity-70 hover:opacity-100 transition-opacity"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <CustomButton className="mt-4 rounded-full" style={{
                                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.highlight} 100%)`,
                                border: `2px solid ${colors.light}40`
                            }}>
                                Connect
                            </CustomButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};