import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ProfileBtn from "./buttons/ProfileBtn";
import SignUpBtn from "./buttons/SignUpBtn";
import { ThemeToggle } from "./ThemeToggle";
import ArrowBigUpDashIcon from "./ui/arrow-big-up-dash-icon";
import { Button } from "./ui/button";
import HomeIcon from "./ui/home-icon";
import PenIcon from "./ui/pen-icon";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: <HomeIcon />, text: "Home" },
  { href: "/website", label: <PenIcon />, text: "Edit website" },
  { href: "/upload", label: <ArrowBigUpDashIcon />, text: "Upload" },
];

export default function NavBar() {
  return (
    <header className="border-b mt-1 md:px-36 px-4 transition-all">
      <div className="relative z-10 flex h-16 items-center">
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="-translate-y-1.75 origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start  gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    return (
                      <NavigationMenuItem className="w-full" key={index}>
                        <NavigationMenuLink
                          className="flex-row items-center gap-2 py-1.5"
                          href={link.href}
                        >
                          <span className="flex gap-2.5 items-center">
                            {link.label}
                            {link.text}
                          </span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                  <ProfileBtn isMobile />
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Left side */}
          <Link
            className="text-primary tracking-wide font-semibold hover:text-primary/90"
            href="/"
          >
            Wrkks
          </Link>
        </div>

        {/* Center navigation */}
        <NavigationMenu className="max-md:hidden absolute left-1/2 -translate-x-1/2">
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
          <ProfileBtn />
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
