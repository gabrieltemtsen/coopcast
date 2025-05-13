import { useEffect, useState } from "react";
import { FAQSection } from "~/app/sections/faq";
import FeaturesSection from "~/app/sections/features";
import HeroSection from "~/app/sections/hero";
import HowItWorks from "~/app/sections/how-it-works";
import { RoadMap } from "~/app/sections/road-map";
import StatsSection from "~/app/sections/stats";
import { RippleBackground } from "~/components/animation/canvas/ripple-backgroound";
import { Navbar } from "~/components/ui/app/nav-bar";

const Home: React.FC = () => {
    const [, setProgress] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            <RippleBackground />
            <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <HowItWorks />
                <RoadMap />
                <FAQSection />
            </div>
        </div>
    );
};

export default Home;