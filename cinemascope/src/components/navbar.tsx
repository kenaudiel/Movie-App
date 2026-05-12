import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSeparator } from './ui/dropdown-menu';
import { Button } from './ui/button';

import { CircleQuestionMark, DollarSign, LogOut, Moon, Settings, Sun, UserRound } from 'lucide-react'
import { FaGithub } from "react-icons/fa";

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
      <NavigationMenu className="justify-between h-12">
          <NavigationMenuList className="ml-20 gap-2">
            {listItem1.map(item => 
            <NavigationMenuItem>
              <NavigationMenuLink key={item.key} href={item.href}>{item.title}</NavigationMenuLink>
            </NavigationMenuItem>)}
          </NavigationMenuList>

          <NavigationMenuList className="mr-4 gap-2">
					  <Button onClick={() => onClickToggleMode(theme, setTheme)} variant="ghost" size="icon-lg">
							{theme === "dark" ? <Sun/> : <Moon/>}
						</Button>
						<Button asChild variant="ghost" size="icon-lg">
              <NavigationMenuLink href="https://github.com/kenaudiel" target="_blank">
                <FaGithub />  
              </NavigationMenuLink>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="ml-6">
                <Avatar size="lg">
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-10">
                <DropdownMenuGroup>
                  <DropdownMenuItem><UserRound />Profile</DropdownMenuItem>
                  <DropdownMenuItem><DollarSign />Billing</DropdownMenuItem>
                  <DropdownMenuItem><Settings />Setting</DropdownMenuItem>
                  <DropdownMenuItem><CircleQuestionMark />Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">
                    <LogOut color="#ff0000" />Log Out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </NavigationMenuList>
      </NavigationMenu>
  )
}