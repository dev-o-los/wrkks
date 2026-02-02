import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import AnimatedIconButton from "./AnimatedBtn";
import GitHubIcon from "./ui/github-icon";
import TwitterIcon from "./ui/twitter-x-icon";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <Separator />
          <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Wrkks
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-2">
              <Link href="https://github.com/dev-o-los/rexime" target="_blank">
                <AnimatedIconButton
                  icon={<GitHubIcon />}
                  className="rounded-full size-9"
                />
              </Link>
              <Link href="https://x.com/utkarshdev_" target="_blank">
                <AnimatedIconButton icon={<TwitterIcon />}>
                  @utkarshdev_
                </AnimatedIconButton>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
