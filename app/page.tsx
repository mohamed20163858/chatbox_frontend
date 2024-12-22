"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SplashPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/onboarding");
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  return (
    <div className="splash-page">
      <h1>Welcome to Chatbox</h1>
      <p>Loading...</p>
    </div>
  );
};

export default SplashPage;
