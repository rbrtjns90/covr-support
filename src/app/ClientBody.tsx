"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ensure dark theme and proper styling during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-background text-foreground";
    document.documentElement.classList.add("dark");
  }, []);

  return <div className="antialiased">{children}</div>;
}
