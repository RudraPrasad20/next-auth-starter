"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserProfile,
  useSession,
} from "@clerk/clerk-react";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  return (
    <div>
      hey
      <Button>
        <SignedIn>
          <SignOutButton>Sign Out</SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">Sign In</SignInButton>
        </SignedOut>
      </Button>
    </div>
  );
}
