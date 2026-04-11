import * as React from "react";

export function Badge({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`inline-flex items-center rounded-full border border-slate-200 ${className}`.trim()} {...props} />;
}
