import { BarChart3, Shield, Users, Wallet } from "lucide-react";
import { Blob } from "~/components/ui/app/blob";
import { StatCard } from "~/components/ui/app/custom-cards/stat-cards";
import { colors } from "~/constants";

import React from 'react';

const StatsSection = () => {
    return (
        <section className="py-16 relative">
            <Blob className="top-1/2 left-1/4" size="lg" color={colors.light} />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        icon={<Users className="h-5 w-5" style={{ color: colors.primary }} />}
                        title="Total Members"
                        value="3,274"
                        description="Growing by ~120/week"
                    />
                    <StatCard
                        icon={<Wallet className="h-5 w-5" style={{ color: colors.primary }} />}
                        title="Total Value Locked"
                        value="$178,453"
                        description="From monthly contributions"
                    />
                    <StatCard
                        icon={<Shield className="h-5 w-5" style={{ color: colors.primary }} />}
                        title="Active Loans"
                        value="843"
                        description="With 97.3% repayment rate"
                    />
                    <StatCard
                        icon={<BarChart3 className="h-5 w-5" style={{ color: colors.primary }} />}
                        title="APY for Members"
                        value="5.4%"
                        description="From yield + interest sharing"
                    />
                </div>
            </div>
        </section>
    );
};

export default StatsSection

