import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from '@/components/ui/navigation-menu'

type listItemProps = {
  key:string,
  title:string,
  href?:string
}

const listItem1:listItemProps[] = [
  {
    key:"Home",
    title:"Home",
    href:""
  },
  {
    key:"About",
    title:"About",
    href:""
  },
  {
    key:"Specification",
    title:"Specification",
    href:""
  },
  {
    key:"Blog",
    title:"Blog",
    href:""
  }
] 

export default function Navbar(){
    return(
        <NavigationMenu className="bg-gray-200">
            <NavigationMenuList className="">
                {listItem1.map(item => 
                <NavigationMenuItem>
                  <NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
                </NavigationMenuItem>)}
            </NavigationMenuList>

            <NavigationMenuList className="">

            </NavigationMenuList>
        </NavigationMenu>
    )
}