"use client";

import { Input } from "@/components/ui/input";
import { getUserData } from "@/lib/supabase/getUserData";
import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import EditDomainDialog from "./resume/EditDomainDialog";

type UserData = {
  username: string;
};

export default function DomainInputField() {
  const id = useId();

  const { data, error } = useQuery<UserData | null>({
    queryKey: ["username"],
    queryFn: async () => getUserData(["username"]),
  });

  return (
    <div className="*:not-first:mt-2">
      <div className="flex rounded-md shadow-xs">
        <Input
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          id={id}
          placeholder={error ? "username" : (data?.username ?? "username")}
          disabled
          type="text"
        />
        <EditDomainDialog />
      </div>
    </div>
  );
}
