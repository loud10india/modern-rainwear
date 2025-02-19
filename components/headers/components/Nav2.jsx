"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav2({ links }) {
    const [menuOpen, setMenuOpen] = useState([-1, -1]);
    const pathname = usePathname();

    const toggleMenu = (level, index) => {
        const tempMenuOpen = [...menuOpen];
        tempMenuOpen[level] = tempMenuOpen[level] === index ? -1 : index;
        setMenuOpen(tempMenuOpen);
    };

    useEffect(() => {
        setTimeout(() => {
            scrollToElement();
        }, 1000);
        init_classic_menu_resize();

        window.addEventListener("resize", init_classic_menu_resize);

        return () => {
            window.removeEventListener("resize", init_classic_menu_resize);
        };
    }, []);

    return (
        <>
            {links.map((item, index) => (
                <li className={menuOpen[0] === index ? "js-opened" : ""} key={index}>
                    {item.subMenu ? (
                        <>
                            <a
                                href='#'
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu(0, index);
                                }}
                                className='mn-has-sub'
                            >
                                {item.title} <i className='mi-chevron-down' />
                            </a>
                            <ul className={`mn-sub ${menuOpen[0] === index ? "mobile-sub-active" : ""}`}>
                                {item.subMenu[0].links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link href={item.href || item.link || "#"} className={pathname === (item.href || item.link) ? "active" : ""}>
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </>
    );
}
