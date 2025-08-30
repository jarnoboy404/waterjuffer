"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const SPREADSHEET_ID =
  "2PACX-1vSODrB7o6D3MZraBXLF7SLaUWskchrJc5OoObcj-Gq9cRns5MLgejoHOlQjcYoIlaHok0Vdci2uDk2h";

export default function TestData() {
  const [content, setContent] = useState<Record<string, string>>({});

  const { data: text, error } = useSWR(
    `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?output=csv`,
    (url) => fetch(url).then((res) => res.text())
  );

  console.log("text", text);

  useEffect(() => {
    if (!text) return;
    const lines = text.split("\n") as string[];
    const data: Record<string, string> = {};

    lines.forEach((line) => {
      const [key, ...rest] = line.split(",");
      if (key && rest.length > 0) data[key.trim()] = rest.join(",").trim();
    });

    setContent(data);
  }, [text]);

  if (error) return <div>Failed to load</div>;
  if (!text) return <div>Loading...</div>;

  return (
    <main style={{ padding: 40 }}>
      <h1>{content["title"]}</h1>
      <h2>{content["subtitle"]}</h2>
      <Link href="/test">
        <p>Go to test</p>
      </Link>
    </main>
  );
}
