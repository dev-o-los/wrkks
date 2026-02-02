import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";
import { Button } from "./ui/button";

export default function SignUpBtn() {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <Button
            variant="outline"
            className="rounded-xl shadow-sm tracking-wide"
          >
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <Suspense fallback={<div>hello</div>}>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Suspense>
    </div>
  );
}
