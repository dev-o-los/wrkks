"use client";

import { getUserData } from "@/lib/supabase/getUserData";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import UserIcon from "./ui/user-icon";

export default function ProfileBtn() {
  const { data } = useQuery({
    queryKey: ["user-slug"],
    queryFn: async () => getUserData(["username"]),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return (
    <Link
      href={data?.username ? data.username : "/"}
      className="text-muted-foreground ml-5 hover:bg-transparent hover:text-muted-foreground"
    >
      <UserIcon size={17} />
    </Link>
  );
}
