"use client";

import { navigationMenuTriggerStyle } from "../components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";

// import {NavigationMenu} from "../components/ui/navigation-menu";

export default function Home() {
  return (
    <>
      <NavigationMenu className="bg-primary px-5 py-2 d-flex justify-between" >
        <NavigationMenuList>
          <NavigationMenuItem className="px-2" >
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle}`} >Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem  className="px-2" >
              <NavigationMenuLink className={`${navigationMenuTriggerStyle}`} >About Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="px-2" >
              <NavigationMenuLink className={`${navigationMenuTriggerStyle}`} >Contact Us</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div>
          <Button>Hi I am button</Button>
          <Button className="bg-sky-500/100 ..." >Hi I am button</Button>
        </div>
      </NavigationMenu>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Atisam Akhtar Here</div>
      </main>
    </>
  )
}
