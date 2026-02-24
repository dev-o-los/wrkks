"use client";

import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useResumeStore, WebsiteStyle } from "@/hooks/stores/useResumeStore";

export default function WebsiteStyleSelector() {
  const websiteStyle = useResumeStore((s) => s.websiteStyle);
  const setWebsiteStyle = useResumeStore((s) => s.setWebsiteStyle);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Website Style
          <ChevronDownIcon
            aria-hidden="true"
            className="-me-1 opacity-60"
            size={16}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          onValueChange={(val) => setWebsiteStyle(val as WebsiteStyle)}
          value={websiteStyle}
        >
          <DropdownMenuRadioItem value="simple">
            Simple Style
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bento">
            Bento Style
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
