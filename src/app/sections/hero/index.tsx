import React from 'react';
import { Blob } from '~/components/ui/app/blob';
import { motion } from 'framer-motion';
import { colors } from '~/constants';
import { Badge } from '~/components/ui/shadcn/badge';
import { NeonText } from '~/components/ui/app/neon-text';
import { CustomButton } from '~/components/ui/app/custom-button';
import { ArrowRight } from 'lucide-react';


const HeroSection = () => {
    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            <Blob className="top-10 right-1/4" size="lg" color={colors.primary} />
            <Blob className="bottom-20 left-20" size="lg" color={colors.highlight} />

            <div className="container mx-auto px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-4"
                    >
                        <Badge className="text-xs font-normal px-3 py-1 rounded-full mb-6" style={{
                            background: `${colors.highlight}40`,
                            border: `1px solid ${colors.highlight}`
                        }}>
                            REVOLUTIONARY SOCIAL-FI
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="block">A</span>
                        <NeonText size="xl" className="inline-block mr-3">Social-Fi</NeonText>
                        <span className="block mt-2">Credit Union for</span>
                        <span className="mt-2 block" style={{ color: colors.primary }}>the Farcaster Era</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl mb-8 opacity-80"
                    >
                        Turn your social capital into real financial access—powered by the Farcaster social graph
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <CustomButton className="rounded-full px-8 py-6 text-lg flex items-center gap-2" style={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.highlight} 100%)`,
                            border: `2px solid ${colors.light}40`
                        }}>
                            Join CoopCast <ArrowRight className="h-5 w-5" />
                        </CustomButton>
                        <CustomButton variant="outline" className="rounded-full px-8 py-6 text-lg border-2" style={{
                            borderColor: colors.primary,
                            color: colors.primary
                        }}>
                            Learn More
                        </CustomButton>
                    </motion.div>
                </div>
            </div>

            <div className="absolute right-0 bottom-0 -mb-20 opacity-40 hidden lg:block">
                <svg width="400" height="400" viewBox="0 0 200 200">
                    <path
                        fill="none"
                        stroke={colors.primary}
                        strokeWidth="0.5"
                        d="M40,120 C70,140 100,160 130,120 S180,60 160,40 S120,20 100,40 S60,100 40,120 Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;