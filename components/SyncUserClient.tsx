"use client";

import { User, useUserStore } from "@/hooks/stores/useUserStore";
import { useEffect } from "react";

export default function SyncUserClient({ user }: { user: User | null }) {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user, setUser]);

  return null;
}
