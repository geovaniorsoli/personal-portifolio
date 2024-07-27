import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button
} from "@nextui-org/react";

import sty from "../styles/nav.module.css"

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { text: "Home", href: "/", showAnchor: false },
        { text: "Sobre", href: "/", showAnchor: false },
        { text: "Projetos", href: "/projetos", showAnchor: false },
        { text: "Contato", href: "/contato", showAnchor: false },
        { text: "Github", href: "https://github.com/GeovaniOrsoli", showAnchor: true, isExternal: true },
        { text: "nowe", href: "https://github.com/GeovaniOrsoli", showAnchor: true, isdisable: true, isExternal: true },
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link color="warning" href="/">
                        <p className="font-bold text-inherit">geovaniorsoli</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        color="warning"
                            isExternal={item.isExternal}
                            isDisabled={item.isdisable}
                            className={sty.navItemLink}
                            href={item.href}
                        >
                            {item.text}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
