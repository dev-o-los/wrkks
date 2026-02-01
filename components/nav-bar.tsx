import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { UserIcon } from "lucide-react";
import SignUpBtn from "./SignUpBtn";
import { ThemeToggle } from "./ThemeToggle";
import ArrowBigUpDashIcon from "./ui/arrow-big-up-dash-icon";
import HomeIcon from "./ui/home-icon";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: <HomeIcon /> },
  { href: "/error", label: <UserIcon /> },
  { href: "/upload", label: <ArrowBigUpDashIcon /> },
];

export default function NavBar() {
  return (
    <header className="border-b mt-1 md:px-36 px-4">
      <div className="flex h-16 items-center justify-between gap-4">
        <a className="text-primary hover:text-primary/90" href="#">
          Wrkks
        </a>
        {/* Navigation menu */}
        <NavigationMenu className="pl-8 md:pl-7">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={String(index)}>
                <NavigationMenuLink
                  className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                  href={link.href}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SignUpBtn />
        </div>
      </div>
    </header>
  );
}
