"use server";

import { getUserData } from "@/lib/supabase/user/getUserData";

export async function getShareUrl() {
  const data = await getUserData(["username"]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://wrkks.site";

  return data?.username ? `${baseUrl}/${data.username}` : baseUrl;
}
