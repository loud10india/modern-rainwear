"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import { menuItems } from "@/data/menu";

export default function Nav2() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            scrollToElement();
        }, 1000);

        init_classic_menu_resize();

        const handleResize = () => {
            init_classic_menu_resize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {menuItems.map((item, index) => (
                <li key={index} className={pathname === item.link ? "active" : ""}>
                    <Link href={item.link}>
                        <div>{item.title}</div>
                    </Link>
                </li>
            ))}
        </>
    );
}
