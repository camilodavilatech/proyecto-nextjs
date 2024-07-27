"use client";

import { ModeToggle } from "./mode-theme";

export function Header() {
  return (
    <header className="flex justify-between px-8 py-4">
      <div></div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
