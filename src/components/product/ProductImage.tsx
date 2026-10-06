import { GearIcon } from "../icons";
import { cn } from "../shared";

/** Shows the first product image, or a neutral placeholder until photos are supplied. */
export function ProductImage({
  src,
  alt,
  brand,
  className,
}: {
  src?: string;
  alt: string;
  brand?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative grid aspect-square place-items-center overflow-hidden", src ? "bg-white" : "bg-muted", className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- catalog images may be local or remote
        <img src={src} alt={alt} loading="lazy" className="size-full object-contain p-4" />
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground" role="img" aria-label={`${alt} (image coming soon)`}>
          <GearIcon width={44} height={44} strokeWidth={1.2} />
          {brand && <span className="text-xs font-semibold uppercase tracking-widest">{brand}</span>}
        </div>
      )}
    </div>
  );
}
