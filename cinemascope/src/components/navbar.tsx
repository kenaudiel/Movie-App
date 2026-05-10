import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { Moon, Sun } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FaGithub } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useTheme } from './theme-provider'

type listItemProps = {
  key:string | number,
  title:string,
  href:string
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

type Theme = "dark" | "light" | "system"

function onClickToggleMode(theme:Theme, setTheme:(theme:Theme) => void){
	if(theme === "dark"){
		setTheme("light")
	} else {
		setTheme("dark")
	}
}

export default function Navbar(){
	const {theme, setTheme} = useTheme();

  return(
      <NavigationMenu className="bg-gray-200">
          <NavigationMenuList className="gap-2">
            {listItem1.map(item => 
            <NavigationMenuItem>
              <NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
            </NavigationMenuItem>)}
          </NavigationMenuList>

          <NavigationMenuList className="">
					  <Button onClick={() => onClickToggleMode(theme, setTheme)} variant="outline">
							{theme === "light" ? <Sun/> : <Moon/>}
						</Button>
          </NavigationMenuList>
      </NavigationMenu>
  )
}