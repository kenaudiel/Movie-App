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
import { Link } from 'react-router-dom';

type listItemProps = {
  key:string | number,
  title:string,
  path:string
}

const listItem1:listItemProps[] = [
  {
    key:"Home",
    title:"Home",
    path:"/"
  },
  {
    key:"About",
    title:"About",
    path:"/about"
  },
  {
    key:"Films",
    title:"Films",
    path:"/films"
  },
  {
    key:"Blog",
    title:"Blog",
    path:"/blog"
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
      <NavigationMenu className="justify-between h-15 border-b-2">
          <NavigationMenuList className="ml-20 gap-2">
            {listItem1.map(item => 
            <NavigationMenuItem key={item.key}>
              <Link to={item.path}>
                <NavigationMenuLink>{item.title}</NavigationMenuLink>
              </Link>
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
              <DropdownMenuContent className="mr-5 mt-2">
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