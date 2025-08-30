"use client";

import { useEffect, useState } from "react";
import { Cache, SWRConfig } from "swr";

function localStorageProvider(): Cache<any> {
  // laad bestaande cache
  const map = new Map<string, any>(
    JSON.parse(localStorage.getItem("app-cache") || "[]")
  );

  // sla cache op bij sluiten
  if (typeof window !== "undefined") {
    window.addEventListener("beforeunload", () => {
      localStorage.setItem(
        "app-cache",
        JSON.stringify(Array.from(map.entries()))
      );
    });
  }

  return map;
}

export default function SWRSessionStorage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [provider, setProvider] = useState<(() => Cache<any>) | null>(null);

  useEffect(() => {
    setProvider(() => localStorageProvider);
  }, []);

  if (!provider) return <></>;
  return <SWRConfig value={{ provider }}>{children}</SWRConfig>;
}
