import { UpdateUserData } from "@/app/api/user/update/route";

export async function updateUser(updates: UpdateUserData) {
  const res = await fetch("/api/user/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error);
  return data;
}
