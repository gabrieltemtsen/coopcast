import { Blob } from "~/components/ui/app/blob";
import { motion } from "framer-motion";
import { colors } from "~/constants";
import { Badge } from "~/components/ui/shadcn/badge";
import { ArrowUpRight, Coins, Users, Wallet } from "lucide-react";

import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 relative">
            <Blob className="top-0 right-20" color={colors.highlight} />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-xl"
                >
                    <Badge className="text-xs font-normal px-3 py-1 rounded-full mb-4" style={{
                        background: `${colors.highlight}40`,
                        border: `1px solid ${colors.highlight}`
                    }}>
                        FEATURES
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">Core Features</h2>
                    <p className="text-lg opacity-80">
                        CoopCast combines social attestations with DeFi primitives to create a new model for community finance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Membership NFT",
                            description: "Mint a CastPass for $1/year granting voting rights and access to coop services",
                            icon: <Users className="h-10 w-10" style={{ color: colors.primary }} />,
                            delay: 0
                        },
                        {
                            title: "Share Token (CAST)",
                            description: "Earn CAST with every contribution, unlocking governance and yield benefits",
                            icon: <Coins className="h-10 w-10" style={{ color: colors.primary }} />,
                            delay: 0.1
                        },
                        {
                            title: "Micro-Loans",
                            description: "Borrow up to 3× your contributions with guarantor backing from your network",
                            icon: <Wallet className="h-10 w-10" style={{ color: colors.primary }} />,
                            delay: 0.2
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 5
                            }}
                            className="relative group"
                        >
                            {/* Translucent border effect */}
                            <div className="absolute inset-0 rounded-2xl p-px" style={{
                                background: `linear-gradient(135deg, ${colors.primary}60, ${colors.highlight}60)`,
                                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                maskComposite: 'exclude',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                            }} />

                            {/* Moving party light effect */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-movingLight" />
                            </div>

                            {/* Crazy card design with multiple layers and effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-highlight/20 to-secondary/30 rounded-2xl blur-lg transform group-hover:scale-105 transition-all duration-500 opacity-70" />

                            <div className="relative z-10 p-6 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                                {/* Animated glow effect */}
                                <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-highlight/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                {/* Background grid pattern */}
                                <div className="absolute inset-0 z-0 opacity-20">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute left-0 right-0 h-px bg-white/10"
                                            style={{ top: `${i * 10}%` }}
                                        />
                                    ))}
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute top-0 bottom-0 w-px bg-white/10"
                                            style={{ left: `${i * 10}%` }}
                                        />
                                    ))}
                                </div>

                                {/* Background gradient */}
                                <div className="absolute inset-0 opacity-30 bg-gradient-to-br z-0" style={{
                                    background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.highlight}40 100%)`
                                }} />

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-highlight to-transparent transform rotate-45 translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-all duration-500" />
                                </div>

                                {/* Content */}
                                <div className="relative z-20">
                                    <div className="mb-6 p-3 inline-block" style={{
                                        background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.highlight}40 100%)`,
                                        borderRadius: "16px",
                                        boxShadow: `0 0 20px ${colors.primary}40`
                                    }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="opacity-80">
                                        {feature.description}
                                    </p>

                                    {/* Hover reveal button */}
                                    <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <a href="#" className="inline-flex items-center text-sm font-medium gap-1 text-highlight">
                                            Learn more <ArrowUpRight className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute left-10 bottom-10 w-48 h-48 opacity-20">
                <svg viewBox="0 0 200 200">
                    <path
                        fill="none"
                        stroke={colors.light}
                        strokeWidth="1"
                        d="M70,20 Q80,60 40,80 Q0,100 40,120 Q80,140 50,180"
                    />
                </svg>
            </div>
        </section>
    );
};

export default FeaturesSection

