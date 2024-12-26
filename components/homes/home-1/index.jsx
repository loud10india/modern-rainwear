import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
// import Contact from "@/components/homes/home-1/Contact";
import Contact from "@/components/homes/home-7/Contact";

import Facts from "@/components/homes/home-1/Facts";
// import Faq2 from "@/components/homes/home-1/Faq2";
import Faq2 from "@/components/common/Faq2";

import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
export default function Home1({ onePage = false, dark = false }) {
    return (
        <>
            <section className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""}`} id='about'>
                <div className='container position-relative'>
                    <div className='row mb-60 mb-xs-30'>
                        <div className='col-md-6'>
                            <h2 className='section-caption mb-xs-10'>About Us</h2>
                            <p className='section-title mb-0'>
                                <AnimatedText text='India’s leading manufacturer and wholesale supplier of rainwear' />
                            </p>
                        </div>
                        <div className='col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll'>
                            {/* Decorative Dots */}
                            <div className='decoration-2 d-none d-md-block' data-rellax-y='' data-rellax-speed='0.7' data-rellax-percentage='-0.2'>
                                <Image width='103' height='223' src='/assets/images/decoration-2.svg' alt='' />
                            </div>
                            {/* End Decorative Dots */}

                            {onePage ? (
                                <a href='/our-rainwears' className='link-hover-anim underline align-middle' data-link-animate='y'>
                                    <span className='link-strong link-strong-unhovered'>
                                        View our products <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                    <span className='link-strong link-strong-hovered' aria-hidden='true'>
                                        View our products <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                </a>
                            ) : (
                                <Link
                                    href={`/our-rainwears${dark ? "-dark" : ""}`}
                                    className='link-hover-anim underline align-middle'
                                    data-link-animate='y'
                                >
                                    <span className='link-strong link-strong-unhovered'>
                                        View our products <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                    <span className='link-strong link-strong-hovered' aria-hidden='true'>
                                        View our products <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                    <About />
                </div>
            </section>

            <hr />
            <section className={`page-section  scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='portfolio'>
                <Portfolio />
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

            <section className='page-section z-index-1'>
                <div className='container position-relative'>
                    <div className='row position-relative'>
                        <div className='col-md-6 col-lg-5 mb-md-50 mb-sm-30'>
                            <h3 className='section-title mb-30'>Everything You Need to Know About Our Rainwear Wholesale Services</h3>
                            <p className='text-gray mb-0'>
                                Learn how Modern Rainwear delivers tailored solutions, timely service, and top-quality products for all your B2B
                                rainwear needs.
                            </p>
                        </div>

                        <div className='col-md-6 offset-lg-1 pt-10 pt-sm-0'>
                            {/* <!-- Accordion --> */}
                            <Faq2 />
                            {/* <!-- End Accordion --> */}
                        </div>
                    </div>
                </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

            <section className={`page-section  scrollSpysection   ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                <Contact />
            </section>
        </>
    );
}
