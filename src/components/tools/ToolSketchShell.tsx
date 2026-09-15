import type { ReactNode } from "react";

type ToolSketchShellProps = {
  name: string;
  description: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared calculator chrome with WebApplication microdata.
 * Lives outside claimed tool *pages* — wraps free calculator components.
 */
export function ToolSketchShell({
  name,
  description,
  children,
  className,
}: ToolSketchShellProps) {
  return (
    <div
      className={className}
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <meta itemProp="name" content={name} />
      <meta itemProp="description" content={description} />
      <meta itemProp="applicationCategory" content="UtilitiesApplication" />
      <meta itemProp="operatingSystem" content="Any" />
      <meta itemProp="isAccessibleForFree" content="true" />
      {children}
    </div>
  );
}
