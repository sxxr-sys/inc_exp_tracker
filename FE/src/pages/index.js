import { useEffect } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true; 

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-up"); 
    } else {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router]);

  return null;
}