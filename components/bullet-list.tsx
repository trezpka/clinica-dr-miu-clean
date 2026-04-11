import { CheckCircle2 } from "lucide-react";

export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-slate-950" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
