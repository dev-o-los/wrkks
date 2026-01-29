"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  //   return (
  //     <Button className="" variant="ghost">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         stroke-width="2"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         className="size-4.5"
  //       >
  //         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  //         <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  //         <path d="M12 3l0 18"></path>
  //         <path d="M12 9l4.65 -4.65"></path>
  //         <path d="M12 14.3l7.37 -7.37"></path>
  //         <path d="M12 19.6l8.85 -8.85"></path>
  //       </svg>
  //     </Button>
  //   );
}
