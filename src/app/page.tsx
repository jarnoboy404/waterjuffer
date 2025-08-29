"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSODrB7o6D3MZraBXLF7SLaUWskchrJc5OoObcj-Gq9cRns5MLgejoHOlQjcYoIlaHok0Vdci2uDk2h/pub?output=csv"
      );

      const text = await res.text();
      const lines = text.split("\n");
      const data: Record<string, string> = {};

      lines.forEach((line) => {
        const [key, ...rest] = line.split(",");
        if (key && rest.length > 0) data[key.trim()] = rest.join(",").trim();
      });

      setContent(data);
    }

    fetchData();
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>{content["title"]}</h1>
      <h2>{content["subtitle"]}</h2>
      <p>{content["about"]}</p>
    </main>
  );
}
