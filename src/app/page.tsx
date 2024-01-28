"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ScheduleXpressApp() {
  const router = useRouter();
  useEffect(() => {
    router.push("/scheduler");
  }, [router]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        Loading...
      </main>
    </>
  );
}
