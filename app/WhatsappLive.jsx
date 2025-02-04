"use client";
import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import "./global.css";

const WhatsappLive = () => {
    const whatsappNumber = "9699247216";
    const baseURL = "https://api.whatsapp.com/send/";
    const encodedMessage = "Hi! I want to know about your rainwear products. Please help me.";
    const whatsappLink = `${baseURL}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    useEffect(() => {
        const handleScroll = () => {
            const whatsappLinkElement = document.querySelector(".whatsapp-link");
            if (window.scrollY > 10) {
                whatsappLinkElement?.classList.add("visible");
            } else {
                whatsappLinkElement?.classList.remove("visible");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <a
                className='whatsapp-link d-none position-fixed'
                style={{
                    bottom: "20px",
                    right: "20px",
                }}
                href={whatsappLink} // Replace with your WhatsApp number
                target='_blank'
                rel='noreferrer noopener'
            >
                <div className='position-relative'>
                    <div
                        className='position-absolute top-50 start-50 translate-middle bg-success rounded-circle'
                        style={{
                            width: "60px",
                            height: "60px",
                            animation: "ping 1.5s infinite ease-in-out",
                            zIndex: "-1",
                            opacity: "0.75",
                        }}
                    ></div>
                    <Image src='/assets/images/whatsapp (1).png' width={45} height={45} className='position-relative' alt='WhatsApp' />
                </div>
            </a>
            <style jsx>{`
                .whatsapp-link.visible {
                    display: block !important;
                }
                @keyframes ping {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    75% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default WhatsappLive;
