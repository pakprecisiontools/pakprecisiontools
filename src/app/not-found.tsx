import Link from "next/link";
import { SearchBar } from "@/components/layout/SearchBar";
import { buttonClass, Container } from "@/components/shared";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Error 404</p>
      <h1 className="mt-2 text-4xl font-bold">We couldn’t find that page</h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">Try searching for a part number, or let us source it for you.</p>
      <SearchBar className="mx-auto mt-8 max-w-xl" id="notfound-search" />
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/products" className={buttonClass("default")}>
          Browse products
        </Link>
        <Link href="/source" className={buttonClass("dark")}>
          Source a part
        </Link>
      </div>
    </Container>
  );
}
