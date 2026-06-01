import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

type socialMediaType = {
    key:number,
    icon:React.ReactNode,
    href:string,
}

type footerLinksType = {
    key:number,
    text:string,
    path:string
}

const socialMedia:socialMediaType[] = [
    {
        key:1,
        icon:<FaFacebook />,
        href:""
    },
    {
        key:2,
        icon:<FaTiktok />,
        href:""
    },
    {
        key:3,
        icon:<FaInstagram />,
        href:""
    },
    {
        key:4,
        icon:<FaXTwitter />,
        href:""
    },
    {
        key:5,
        icon:<FaYoutube />,
        href:""
    },
]

const footerLinks: footerLinksType[] = [
    {
        key:1,
        text:"Terms",
        path:""
    },
    {
        key:2,
        text:"Privacy",
        path:""
    },
    {
        key:3,
        text:"Security",
        path:""
    },
    {
        key:4,
        text:"Community",
        path:""
    },
    {
        key:5,
        text:"Docs",
        path:""
    },
    {
        key:6,
        text:"Contact",
        path:""
    },
    {
        key:7,
        text:"Help",
        path:""
    },
    {
        key:8,
        text:"Manage Cookies",
        path:""
    },
]

export default function Footer(){
    return(
        <NavigationMenu className="flex border-t-2 items-center justify-center p-10 gap-30">
            <NavigationMenuList className="flex gap-5">
                {footerLinksList()}
            </NavigationMenuList>

            <NavigationMenuList className="flex">
                {SocialMediaList()}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function SocialMediaList(){
    return(
        socialMedia.map(item =>
            <NavigationMenuItem key={item.key}>
                <NavigationMenuLink href={item.href}>
                    {item.icon}
                </NavigationMenuLink>
            </NavigationMenuItem>
        )
    )
}

function footerLinksList(){
    return(
        footerLinks.map(item =>
            <NavigationMenuItem key={item.key} className="text-sm dark:hover:text-orange-300 hover:text-orange-400">
                <Link to={item.path}>
                    {item.text}
                </Link>
            </NavigationMenuItem>
        )
    )
}