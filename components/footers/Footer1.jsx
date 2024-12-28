import React from "react";
import Image from "next/image";
import FooterSocials from "./FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";
import Faq3 from "@/components/common/Faq3";

export default function Footer1({ dark = false }) {
    return (
        <footer className={`page-section footer ${dark ? "bg-dark-2 light-content dark" : "bg-gray-light-1"}  pb-30`}>
            <div className='container'>
                <div className='row align-items-start pb-100 pb-sm-70 pb-xs-40'>
                    <div className='col-md-5 col-lg-4 text-gray mb-sm-10'>
                        {/* <Link href={"/"} className='mb-30 d-block'>
                            <Image src='/assets/images/logo.png' width={105} height={34} className='light-mode-logo' alt='Your Company Logo' />
                            <Image src='/assets/images/logo.png' width={105} height={34} className='dark-mode-logo' alt='Your Company Logo' />
                        </Link> */}
                        <p className='text-black fw-semibold'>India’s leading manufacturer and wholesale supplier of rainwear and raincoat</p>
                        <div className='clearlinks'>
                            <strong className='text-black fw-semibold'>T.</strong>&nbsp;
                            <a href='tel:+18376528800'>+91-9699247216 | +91-9594442774</a>
                        </div>
                        <div className='clearlinks'>
                            <strong className='text-black fw-semibold'>E.</strong>&nbsp;
                            <a href='mailto:ibthemes21@gmail.com'>modernrainwear@gmail.com</a>
                        </div>
                    </div>

                    <div className='col-md-7 col-lg-8'>
                        <div className='faq-container'>
                            <Faq3 />
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className='row text-gray'>
                    <div className='col-md-4 col-lg-3'>
                        <b>© Modern Rainwear {new Date().getFullYear()}.</b>
                    </div>
                    <div className='col-md-7 offset-md-1 offset-lg-2 clearfix'>
                        {/* Back to Top Link */}
                        <div className='local-scroll float-end mt-n20 mt-sm-10'>
                            <a href='#top' className='link-to-top'>
                                <i className='mi-arrow-up size-24' />
                                <span className='visually-hidden'>Scroll to top</span>
                            </a>
                        </div>
                        {/* End Back to Top Link */}
                    </div>
                </div>
                {/* End Footer Text */}
            </div>
        </footer>
    );
}
