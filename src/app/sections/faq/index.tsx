import React from 'react';
import { Blob } from '~/components/ui/app/blob';
import {motion} from "framer-motion"
import { colors } from '~/constants';
import { Badge } from '~/components/ui/shadcn/badge';
import { FaqItem } from '~/components/ui/app/faq-item';

export const FAQSection = () => {
    return (
        <section id="faq" className="py-20 relative">
            <Blob className="top-1/2 left-1/4" size="lg" color={colors.light} />

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
                        FAQ
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg opacity-80">
                        Find answers to common questions about CoopCast.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        {
                            question: "What is CoopCast?",
                            answer: "CoopCast is a decentralized platform that combines social attestations with DeFi primitives to create a new model for community finance."
                        },
                        {
                            question: "How do I join CoopCast?",
                            answer: "You can join CoopCast by minting a Membership NFT, which grants you access to our financial services and governance."
                        },
                        {
                            question: "What are CAST tokens?",
                            answer: "CAST tokens are earned through contributions to the CoopCast pool and represent your share of the community fund."
                        },
                        {
                            question: "How do micro-loans work?",
                            answer: "Micro-loans allow you to borrow up to 3× your contributions with guarantor backing from your network."
                        },
                        {
                            question: "Where do the fees go?",
                            answer: "70% of the join fee goes to the Reserve Fund, 20% to the Dev Pool, and 10% to the DAO Treasury. Monthly contributions are split with 90% going to the Member Vault and 10% to the Risk Buffer."
                        },
                        {
                            question: "How are loan interests and rewards handled?",
                            answer: "Loan interest and late fees are split with 70% going to yield-back to savers, 20% to the Risk Buffer, and 10% to the Dev Pool. Savers earn CAST tokens as rebate dividends and can receive bonus NFT stamps for consistent contributions."
                        },
                    ].map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

