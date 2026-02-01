import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
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
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
