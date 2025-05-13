import React from 'react';
import { Blob } from '~/components/ui/app/blob';
import {motion} from "framer-motion"
import { colors } from '~/constants';
import { Badge } from '~/components/ui/shadcn/badge';
import { BarChart3, CheckCircle, Send, Star } from 'lucide-react';

export const RoadMap = () => {
    return (
        <section id="roadmap" className="py-20 relative">
            <Blob className="top-1/2 right-1/4" size="lg" color={colors.highlight} />

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
                        ROADMAP
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">Our Journey Ahead</h2>
                    <p className="text-lg opacity-80">
                        Explore the upcoming milestones and features for CoopCast.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {[
                        {
                            title: "Phase 1: Launch",
                            description: "Launch of CoopCast platform with Membership NFTs and initial pool contributions.",
                            date: "Q1 2025",
                            icon: <CheckCircle className="h-6 w-6" style={{ color: colors.primary }} />,
                        },
                        {
                            title: "Phase 2: Growth",
                            description: "Introduction of micro-loans and expansion of governance features.",
                            date: "Q2 2025",
                            icon: <BarChart3 className="h-6 w-6" style={{ color: colors.primary }} />,
                        },
                        {
                            title: "Phase 3: Expansion",
                            description: "Integration with additional DeFi protocols and community partnerships.",
                            date: "Q3 2025",
                            icon: <Send className="h-6 w-6" style={{ color: colors.primary }} />,
                        },
                        {
                            title: "Phase 4: Innovation",
                            description: "Launch of advanced financial products and enhanced governance mechanisms.",
                            date: "Q4 2025",
                            icon: <Star className="h-6 w-6" style={{ color: colors.primary }} />,
                        },
                    ].map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-gray-800"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg" style={{
                                    background: `${colors.primary}20`
                                }}>
                                    {phase.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{phase.title}</h3>
                                    <p className="text-white/70">{phase.description}</p>
                                    <p className="text-sm text-white/50 mt-2">{phase.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
