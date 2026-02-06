import { getUserData } from "@/lib/supabase/user/getUserData";
import Link from "next/link";
import UserIcon from "./ui/user-icon";

export default async function ProfileBtn({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const data = await getUserData(["username"]);

  return isMobile ? (
    <Link
      href={data !== null ? `/${data.username}` : "/"}
      className="flex cursor-pointer items-center gap-2.5 ml-2 text-sm py-1"
    >
      <UserIcon className="text-muted-foreground" size={17} />
      My Site
    </Link>
  ) : (
    <Link
      href={data !== null ? `/${data.username}` : "/"}
      className="text-muted-foreground ml-5 hover:bg-transparent hover:text-muted-foreground"
    >
      <UserIcon size={17} />
    </Link>
  );
}
