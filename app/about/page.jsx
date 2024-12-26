import Footer1 from "@/components/footers/Footer1";
import Faq from "@/components/common/Faq";

import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { menuItems } from "@/data/menu";
import Portfolio from "@/components/portfolio/Portfolio";
const dark = false;
const onePage = false;

export const metadata = {
    title: "Modern Rainwear - Leading Manufacturer of High-Quality Rainwear in India",
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
                                                        <AnimatedText text='About us' />
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
                            <section className='page-section'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-sm-5 mb-xs-50'>
                                            <div className='call-action-4-images'>
                                                <div className='call-action-4-image-1'>
                                                    <Image
                                                        src='/assets/images/demo-strong/745.jpg'
                                                        alt='Image description'
                                                        width={500}
                                                        height={692}
                                                        className='wow scaleOutIn'
                                                        data-wow-duration='1.2s'
                                                    />
                                                </div>
                                                <div
                                                    className='call-action-4-image-2'
                                                    data-rellax-y=''
                                                    data-rellax-speed='0.7'
                                                    data-rellax-percentage='0.25'
                                                >
                                                    <Image
                                                        src='/assets/images/demo-strong/822.jpg'
                                                        alt='Image description'
                                                        width={500}
                                                        height={692}
                                                        className='wow scaleOutIn'
                                                        data-wow-duration='1.2s'
                                                        data-wow-offset={0}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-7 col-xl-6 offset-xl-1 mt-n10'>
                                            <div className='wow linesAnimIn' data-splitting='lines'>
                                                <p className=' mt-0 mb-40 text-gray'>
                                                    Modern Rainwear started its business with a dream to redefine rainwear in India. With great
                                                    efforts and dedication, they have become one of the leading rainwear manufacturer in the country.
                                                    Modern Rainwear is also known for its best prices on bulk orders in India. In the world of
                                                    raincoats and other rainwear products, Modern Rainwear just seems to get it right by delivering
                                                    good fit and performance at reasonable prices. As a leading rainwear manufacturer of the rainwear
                                                    products, the company is swiftly expanding its reach in the entire country. Handling exports to
                                                    major cities like Delhi, Mumbai, and Kolkata the company as a result, has become the first port of
                                                    call when it comes to buying rainwear products.
                                                </p>
                                                <p className='text-gray mb-40'>
                                                    Providing high-quality stylish Indian rainwear to our customers, we aim to brighten up all the
                                                    seasons for them. Rains should no more be an excuse to sit back home, get out enjoy that lovely
                                                    weather with your mates. Which is why we provide our customers with a wide range of lightweight,
                                                    machine washable and 100% waterproof rainwear so that not even bad weather can stop them from
                                                    going out.
                                                </p>
                                            </div>
                                            {/* <div className='local-scroll wow fadeInUp' data-wow-offset={0}>
                                            <Link href={`/main-pages-services-1`} className='btn btn-mod btn-large btn-round btn-hover-anim'>
                                                <span>Our Services</span>
                                            </Link>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className='pt-30'>
                                <div id='paddingRightContainer' className='container' />
                                <div className='row g-0'>
                                    <div className='col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0'>
                                        <div
                                            id='paddingRight'
                                            className={`split-column-right ${
                                                dark ? "bg-dark-2" : "bg-dark-1"
                                            } light-content position-relative d-flex align-items-center`}
                                            data-rellax-y=''
                                            data-rellax-speed='0.5'
                                            data-rellax-percentage='0.5'
                                        >
                                            {/* Decorative Dots */}
                                            <div className='position-absolute top-0 start-0 pt-2 ps-2 opacity-02'>
                                                <Image width={192} height={222} src='/assets/images/demo-strong/decoration.svg' alt='' />
                                            </div>
                                            {/* End Decorative Dots */}
                                            <div>
                                                {/* <h2 className='section-title mb-30' style={{ color: "#EBBA78" }}>
                                                    The <span className='font-alt'>Meaning Behind</span> <b>Mor-Selv</b>.
                                                </h2> */}
                                                <h4 className='mb-50'>
                                                    With credible operations and professional products, we have gained a wide appraisal of our
                                                    customers. Our mission, vision and value being:
                                                </h4>
                                                <p className='mb-50'>
                                                    <b>
                                                        Mission: Their mission is to develop high-quality, trendy and fashionable rainwear products
                                                        for all the age groups thereby offering the consumers with a wide range of products.
                                                    </b>
                                                </p>
                                                <p className='mb-50'>
                                                    <b>Vision: We strive to become the top global manufacturers of rainwear products.</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex align-items-stretch order-lg-first'>
                                        <div className='split-image-left'>
                                            <Image width={1100} height={930} src='/assets/images/bg.png' alt='Image Description' />
                                            {/* Circle Text */}
                                            {/* <div className='position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block'>
                                            <Image
                                                src='/assets/images/demo-strong/circle-text.svg'
                                                width={138}
                                                height={138}
                                                alt='Image Description'
                                            />
                                        </div> */}
                                            {/* End Circle Text */}
                                        </div>
                                    </div>
                                </div>{" "}
                                {/* <Split /> */}
                            </section>
                            <section className='page-section z-index-1'>
                                <div className='container position-relative'>
                                    <div className='row position-relative'>
                                        <div className='col-md-6 col-lg-5 mb-md-50 mb-sm-30'>
                                            <h1 className='section-title mb-30'>Values </h1>
                                            <p className='text-gray mb-0'>
                                                Curious about how a business consulting firm can help your growth? Our FAQs provide insights into our
                                                services, process, and expertise. Discover how Mibugo Consulting empowers businesses to overcome
                                                challenges and achieve success.
                                            </p>
                                        </div>

                                        <div className='col-md-6 offset-lg-1 pt-10 pt-sm-0'>
                                            {/* <!-- Accordion --> */}
                                            <Faq />
                                            {/* <!-- End Accordion --> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    </main>
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
