import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { CircleQuestionMark, DollarSign, LogOut, Moon, Settings, Sun, UserRound } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FaGithub } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuGroup, DropdownMenuSeparator } from './ui/dropdown-menu';
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
					  <Button onClick={() => onClickToggleMode(theme, setTheme)} variant="ghost" size="icon">
							{theme === "dark" ? <Sun/> : <Moon/>}
						</Button>
						<Button asChild variant="ghost" size="icon">
              <NavigationMenuLink href="https://github.com/kenaudiel">
                <FaGithub />  
              </NavigationMenuLink>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem><UserRound />Profile</DropdownMenuItem>
                  <DropdownMenuItem><DollarSign />Billing</DropdownMenuItem>
                  <DropdownMenuItem><Settings />Setting</DropdownMenuItem>
                  <DropdownMenuItem><CircleQuestionMark />Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500"><LogOut color="#ff0000" />Log Out</DropdownMenuItem>

                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </NavigationMenuList>
      </NavigationMenu>
  )
}