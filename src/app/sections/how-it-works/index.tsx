import React from 'react';
import { Blob } from '~/components/ui/app/blob';
import {motion} from "framer-motion"
import { colors } from '~/constants';
import { Badge } from '~/components/ui/shadcn/badge';
import { ProcessStep } from '~/components/ui/app/process-step';
import { Coins, Shield, Users, Wallet } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 relative">
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
                        HOW IT WORKS
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">How CoopCast Works</h2>
                    <p className="text-lg opacity-80">
                        Imagine if every Farcaster handle became a credit-score primitive and the social graph itself underwrote micro-finance for millions.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <ProcessStep
                        number={1}
                        title="Join the Community"
                        description="Mint your Membership NFT to gain access to CoopCast's financial services and governance."
                        icon={<Users className="h-6 w-6" style={{ color: colors.primary }} />}
                    />
                    <ProcessStep
                        number={2}
                        title="Contribute & Earn"
                        description="Contribute to the pool and earn CAST tokens, which represent your share of the community fund."
                        icon={<Coins className="h-6 w-6" style={{ color: colors.primary }} />}
                    />
                    <ProcessStep
                        number={3}
                        title="Access Micro-Loans"
                        description="Borrow up to 3× your contributions with guarantor backing from your network."
                        icon={<Wallet className="h-6 w-6" style={{ color: colors.primary }} />}
                    />
                    <ProcessStep
                        number={4}
                        title="Govern & Grow"
                        description="Participate in governance and grow your financial access with the community."
                        icon={<Shield className="h-6 w-6" style={{ color: colors.primary }} />}
                    />
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-4">Core Mechanics</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 rounded-lg">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Component</th>
                                    <th className="px-4 py-2 text-left">How It Works</th>
                                    <th className="px-4 py-2 text-left">Smart-contract Sketch</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Membership NFT (“CastPass”)</td>
                                    <td className="px-4 py-2">ERC-721; mint for $1/year (or renew). Holds your voting weight.</td>
                                    <td className="px-4 py-2">Membership.sol — handles mint/renew, stores expiry.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Share Token (“CAST”)</td>
                                    <td className="px-4 py-2">ERC-20 with hard-capped supply; every $5 mandatory monthly buy mints 5 CAST into member’s wallet.</td>
                                    <td className="px-4 py-2">Shares.sol — mint only via Contribution Vault; non-transferable until unlock.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Contribution Vault</td>
                                    <td className="px-4 py-2">Accepts USDC; enforces cron-like contribute() once per calendar month. Extra voluntary deposits allowed.</td>
                                    <td className="px-4 py-2">Vault.sol — track member balances, drip yield from strategy contracts.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Guarantor Attestation</td>
                                    <td className="px-4 py-2">Two FIDs sign EIP-712 “Guarantee” for borrower; attestation stored on-chain.</td>
                                    <td className="px-4 py-2">Guarantee.sol — verify sigs, link to loanId, slash guarantor stake on default.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Loan Engine</td>
                                    <td className="px-4 py-2">Borrow up to k × (contributed + guaranteed) (e.g., 3×). Needs ≥2 active guarantors.</td>
                                    <td className="px-4 py-2">LoanManager.sol — issue, track repayments, late fees; pulls from Vault.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Governance</td>
                                    <td className="px-4 py-2">1 CAST = 1 vote; proposals for rates, risk parameters, treasury strategies.</td>
                                    <td className="px-4 py-2">OpenZeppelin Governor + custom modules.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HowItWorks;