import { UserField } from "./getUserData";

export async function getUserDataClient(fields?: UserField[]) {
  const url = fields ? `/api/user?fields=${fields.join(",")}` : `/api/user`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch user data");
    return await res.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}
