"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { portfolios1 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
const filters = [
    { name: "All works", category: "all" },
    { name: "Branding", category: "branding" },
    { name: "Design", category: "design" },
    { name: "Development", category: "development" },
];
export default function Portfolio({ onePage = false, dark = false }) {
    const [currentCategory, setCurrentCategory] = useState("all");
    const isotopContainer = useRef();
    const isotope = useRef();
    const initIsotop = async () => {
        const Isotope = (await import("isotope-layout")).default;
        const imagesloaded = (await import("imagesloaded")).default;

        // Initialize Isotope in the mounted hook
        isotope.current = new Isotope(isotopContainer.current, {
            itemSelector: ".work-item",
            layoutMode: "masonry", // or 'fitRows', depending on your layout needs
        });
        imagesloaded(isotopContainer.current).on("progress", function () {
            // Trigger Isotope layout
            isotope.current.layout();
        });
    };
    const updateCategory = (val) => {
        setCurrentCategory(val);
        isotope.current.arrange({
            filter: val == "all" ? "*" : "." + val,
        });
        //   isotope.value.layout();
    };
    useEffect(() => {
        /////////////////////////////////////////////////////
        // Magnate Animation

        initIsotop();
    }, []);
    return (
        <div className='container'>
            {/* <div className='row mb-60 mb-md-40'>
                <div className='col-lg-5'>
                    <h2 className='section-caption mb-xs-10'>Our Products</h2>
                    <h3 className='section-title mb-0'>
                        <AnimatedText text=' We offer a wide range of rainwear products:' />
                    </h3>
                </div>
            </div> */}
            <div className='row mb-60 mb-xs-30'>
                <div className='col-md-6'>
                    <h2 className='section-caption mb-xs-10'>Our Products</h2>
                    <p className='section-title mb-0'>
                        <AnimatedText text='We offer a wide range of rainwear products' />
                    </p>
                </div>
                <div className='col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll'>
                    {/* Decorative Dots */}
                    <div className='decoration-2 d-none d-md-block' data-rellax-y='' data-rellax-speed='0.7' data-rellax-percentage='-0.2'>
                        <Image width='103' height='223' src='/assets/images/decoration-2.svg' alt='' />
                    </div>
                    {/* End Decorative Dots */}

                    {onePage ? (
                        <a href='/contact' className='link-hover-anim underline align-middle' data-link-animate='y'>
                            <span className='link-strong link-strong-unhovered'>
                                Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                            </span>
                            <span className='link-strong link-strong-hovered' aria-hidden='true'>
                                Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                            </span>
                        </a>
                    ) : (
                        <Link href={`/contact${dark ? "-dark" : ""}`} className='link-hover-anim underline align-middle' data-link-animate='y'>
                            <span className='link-strong link-strong-unhovered'>
                                Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                            </span>
                            <span className='link-strong link-strong-hovered' aria-hidden='true'>
                                Learn more about us <i className='mi-arrow-right size-18' aria-hidden='true'></i>
                            </span>
                        </Link>
                    )}
                </div>
            </div>
            {/* Works Grid */}
            <ul ref={isotopContainer} className='works-grid work-grid-3 work-grid-gut-lg masonry' id='work-grid'>
                {/* Work Item (Lightbox) */}
                <Gallery>
                    {portfolios1.slice(0, 6).map((item, index) => (
                        <li key={index} className={item.className}>
                            {item.description == "Lightbox" ? (
                                <a className={item.linkClassName}>
                                    <div className='work-img'>
                                        <div className='work-img-bg ' />
                                        <Item original={item.imgSrc} thumbnail={item.imgSrc} width={650} height={773}>
                                            {({ ref, open }) => (
                                                <Image
                                                    width={650}
                                                    height={773}
                                                    ref={ref}
                                                    onClick={open}
                                                    src={item.imgSrc}
                                                    alt={item.imgAlt}
                                                    data-wow-delay={item.delay}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                    {/* <div className='work-intro text-start'>
                                        <h3 className='work-title'>{item.title}</h3>
                                        <div className='work-descr'>{item.description}</div>
                                    </div> */}
                                </a>
                            ) : (
                                <Link href=''>
                                    <div className='work-img'>
                                        <div className='work-img-bg ' />
                                        <Image width={650} height={773} src={item.imgSrc} alt={item.imgAlt} data-wow-delay={item.delay} />
                                    </div>
                                    {/* <div className='work-intro text-start'>
                                        <h3 className='work-title'>{item.title}</h3>
                                        <div className='work-descr'>{item.description}</div>
                                    </div> */}
                                </Link>
                            )}
                        </li>
                    ))}
                </Gallery>
                {/* End Work Item */}
            </ul>
            {/* End Works Grid */}
        </div>
    );
}
