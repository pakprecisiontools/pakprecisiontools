import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "../icons";
import { cn } from "../shared";

/** Plain GET form: works without JavaScript and is fully keyboard accessible. */
export function SearchBar({
  defaultValue,
  className,
  size = "md",
  autoFocus,
  id = "site-search",
}: {
  defaultValue?: string;
  className?: string;
  size?: "md" | "lg";
  autoFocus?: boolean;
  id?: string;
}) {
  const lg = size === "lg";
  return (
    <form action="/search" role="search" className={cn("flex w-full", className)}>
      <label htmlFor={id} className="sr-only">
        Search by part number, brand or product name
      </label>
      <Input
        id={id}
        type="search"
        name="q"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        autoComplete="off"
        placeholder="Search part number, brand or product…"
        className={cn("rounded-r-none border-r-0 bg-card text-base", lg ? "h-14 px-4" : "h-11 md:text-sm")}
      />
      <Button type="submit" size={lg ? "lg" : "default"} className={cn("rounded-l-none", lg ? "h-14 px-6" : "h-11")}>
        <SearchIcon size={18} />
        <span className={lg ? "" : "sr-only sm:not-sr-only"}>Search</span>
      </Button>
    </form>
  );
}
