import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type socialMediaProps = {
    key:number,
    icon:React.ReactNode,
    href:string,
}

const socialMedia:socialMediaProps[] = [
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

export default function Footer(){
    return(
        <NavigationMenu className="flex border-t-2 items-center justify-center p-10">
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