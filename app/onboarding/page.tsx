"use client";
import { signIn } from "next-auth/react";

const OnboardingPage = () => {
  return (
    <div className="onboarding-page">
      <h1>Choose a Sign-In Method</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
      <button onClick={() => signIn("apple")}>Sign in with Apple</button>
    </div>
  );
};

export default OnboardingPage;
