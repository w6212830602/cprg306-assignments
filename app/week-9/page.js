"use client";
import { useUserAuth } from "./_utils/auth-context";
import React from "react";

export default function SignInPage() {
  const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

    async function handleSignOut() {
        try {
        await firebaseSignOut();
        } catch (error) {
        console.error("Error signing out:", error);
        }
    }

  return (
    <main>
        <header>
            <h1>Firebase Authentication</h1>
        </header>
        {user ? (
          <section>
            <p className="mb-2 text-gray-700">Logged in as: {user.displayName || user.email}</p>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            <a href="/week-9/shopping-list" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 inline-block text-center">
              Continue to Shopping List
            </a>

          </section>
        ) : (
          <section>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSignIn}
            >
              Sign In with GitHub
            </button>
          </section>
        )}
    </main>
  );
}
