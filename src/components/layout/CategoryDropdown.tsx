"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { ChevronDownIcon } from "../icons";

type Item = { href: string; label: string };

export function CategoryDropdown({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openedByHover = useRef(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close after navigation
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        openedByHover.current = true;
        setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        openedByHover.current = false;
        setOpen(false);
      }}
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-expanded={open}
        aria-controls={panelId}
        className="px-2.5 font-medium"
        onClick={() => {
          if (openedByHover.current) return;
          setOpen((value) => !value);
        }}
      >
        Categories
        <ChevronDownIcon className={cn("transition-transform", open && "rotate-180")} />
      </Button>
      <div id={panelId} className={cn("absolute top-full left-0 z-50 pt-2", !open && "hidden")}>
        <ul className="w-max max-w-[min(42rem,calc(100vw-2rem))] rounded-lg border border-border bg-background py-1 shadow-lg">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-2.5 text-sm leading-snug hover:bg-muted",
                    active && "bg-muted font-medium",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
