import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";
export const metadata = {
    title: "Modern Rainwear - Leading Manufacturer of High-Quality Rainwear in India",
    description:
        "Discover Modern Rainwear, India’s top manufacturer and wholesale supplier of premium, lightweight, and waterproof rainwear. Tailored for businesses and bulk buyers.",
};
export default function Home1MainDemoMultiPage() {
    return (
        <>
            <div className='theme-main'>
                <div className='page' id='top'>
                    <nav className='main-nav transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav>
                    <main id='main'>
                        <ParallaxContainer
                            className='home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection'
                            style={{
                                backgroundImage: "url(/assets/images/full-width-images/White-BG.jpg)",
                            }}
                            id='home'
                        >
                            <Hero1 />
                        </ParallaxContainer>
                        <Home1 />
                    </main>
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
