"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
export const MainLayout = ({ children }) => {
    const path = usePathname();

    useEffect(() => {
        init_wow();
        parallaxMouseMovement();
        var mainNav = document.querySelector(".main-nav");
        if (mainNav?.classList.contains("transparent")) {
            mainNav.classList.add("js-transparent");
        } else if (!mainNav?.classList?.contains("dark")) {
            mainNav?.classList.add("js-no-transparent-white");
        }

        window.addEventListener("scroll", headerChangeOnScroll);
        parallaxScroll();
        return () => {
            window.removeEventListener("scroll", headerChangeOnScroll);
        };
    }, [path]);
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Import the script only on the client side
            import("bootstrap/dist/js/bootstrap.esm").then(() => {
                // Module is imported, you can access any exported functionality if
            });
        }
    }, []);

    return (
        <main className='overflow-x-hidden min-h-screen flex flex-col'>
            <div className='flex-1'>{children}</div>
        </main>
    );
};
