import Footer1 from "@/components/footers/Footer1";
// import Contact from "@/components/homes/home-7/Contact";
import Contact from "@/components/homes/home-7/Contact";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import Portfolio from "@/components/portfolio/Portfolio";
const onePage = false;
const dark = false;

export const metadata = {
    title: " Modern Rainwear - Leading Manufacturer of High-Quality Rainwear in India",
    description:
        "Discover Modern Rainwear, India’s top manufacturer and wholesale supplier of premium, lightweight, and waterproof rainwear. Tailored for businesses and bulk buyers.",
};
export default function MainPortfolioPageBoxed4Col() {
    return (
        <>
            <div className='theme-main'>
                <div className='page' id='top'>
                    <nav className='main-nav transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav>
                    <main id='main'>
                        <section className='page-section pt-0 pb-0' id='home'>
                            <ParallaxContainer
                                className='page-section bg-gray-light-1 bg-light-alpha-90 parallax-5'
                                style={{
                                    backgroundImage: "url(/assets/images/full-width-images/White-BG.jpg)",
                                }}
                            >
                                <div className='container position-relative pt-30 pt-sm-50'>
                                    {/* Section Content */}
                                    <div className='text-center'>
                                        <div className='row'>
                                            {/* Page Title */}
                                            <div className='col-md-8 offset-md-2'>
                                                <h1 className='hs-title-1 mb-20'>
                                                    <span className='wow charsAnimIn' data-splitting='chars'>
                                                        <AnimatedText text='Contact us' />
                                                    </span>
                                                </h1>
                                                <div className='row'>
                                                    <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                                                        <p className='section-descr mb-0 wow fadeIn' data-wow-delay='0.2s' data-wow-duration='1.2s'>
                                                            India’s leading manufacturer and wholesale supplier of rainwear and raincoat
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Page Title */}
                                        </div>
                                    </div>
                                    {/* End Section Content */}
                                </div>
                            </ParallaxContainer>
                        </section>
                        <>
                            {/* <section className='container mt-80 mt-md-40'>
                                <p className='lead'>
                                    At Modern Rainwear, we specialize in wholesale and B2B orders, ensuring bulk buyers and businesses get the best
                                    rainwear solutions. For all your bulk ordering needs, reach out to us through the options below:
                                </p>
                            </section> */}
                            <section className={`page-section  scrollSpysection   ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                                <Contact />
                            </section>
                        </>
                    </main>
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
