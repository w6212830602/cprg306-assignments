"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [user, router]);

  if (user === undefined) {
    return <p>Loading...</p>; 
  }

  return (
    <main>
      <header>
        <h1>Protected Page</h1>
      </header>
      <section>
        <p>Welcome, {user.displayName || user.email}!</p>
      </section>
    </main>
  );
}
