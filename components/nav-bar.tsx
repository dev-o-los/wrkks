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
    <header className="border-b mt-1 md:px-36 px-4 transition-all">
      <div className="relative z-10 flex h-16 items-center">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <a
            className="text-primary tracking-wide font-semibold hover:text-primary/90"
            href="#"
          >
            Wrkks
          </a>
        </div>

        {/* Center navigation */}
        <NavigationMenu className="absolute left-1/2 -translate-x-1/2">
          <NavigationMenuList className="flex gap-4">
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
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <SignUpBtn />
        </div>
      </div>
    </header>
  );
}
