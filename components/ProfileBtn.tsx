import { getUserData } from "@/lib/supabase/user/getUserData";
import Link from "next/link";
import UserIcon from "./ui/user-icon";

export default async function ProfileBtn() {
  const data = await getUserData(["username"]);

  return (
    <Link
      href={data !== null ? `/${data.username}` : "/"}
      className="text-muted-foreground ml-5 hover:bg-transparent hover:text-muted-foreground"
    >
      <UserIcon size={17} />
    </Link>
  );
}
