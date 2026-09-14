import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { slugify } from "@/lib/content/slugify";

function Heading({
  as: Tag,
  children,
  ...props
}: ComponentPropsWithoutRef<"h2"> & { as: "h2" | "h3" | "h4" }) {
  const text = typeof children === "string" ? children : extractText(children);
  const id = props.id ?? slugify(text);

  return (
    <Tag
      id={id}
      className={
        Tag === "h2"
          ? "font-display mt-12 scroll-mt-28 text-2xl text-ink first:mt-0 sm:text-3xl"
          : Tag === "h3"
            ? "font-display mt-8 scroll-mt-28 text-xl text-ink sm:text-2xl"
            : "mt-6 scroll-mt-28 text-lg font-semibold text-ink"
      }
      {...props}
    >
      {children}
    </Tag>
  );
}

function extractText(node: unknown): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: unknown } }).props;
    return extractText(props?.children);
  }
  return "";
}

function Callout({
  title = "Note",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border-l-2 border-tungsten bg-paper-elevated/80 px-5 py-4">
      <p className="text-xs font-semibold tracking-wide text-tungsten uppercase">
        {title}
      </p>
      <div className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted [&_p]:my-2 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

function OfficialSource({ children }: { children: ReactNode }) {
  return <Callout title="Official source">{children}</Callout>;
}

export const guideMdxComponents: MDXComponents = {
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  p: (props) => (
    <p
      className="my-4 text-[1.05rem] leading-[1.75] text-ink-muted"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-5 list-disc space-y-2 pl-5 text-[1.05rem] leading-relaxed text-ink-muted"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-5 text-[1.05rem] leading-relaxed text-ink-muted"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  a: (props) => (
    <a
      className="text-canopy underline decoration-canopy-mist/50 transition-colors hover:text-canopy-mist hover:decoration-canopy-mist"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-fog pl-5 font-display text-xl leading-snug text-ink-muted italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-fog-soft" />,
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table
        className="w-full min-w-[32rem] border-collapse text-left text-sm text-ink-muted"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-fog bg-paper-elevated px-3 py-2.5 font-semibold text-ink"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-fog-soft px-3 py-2.5 align-top" {...props} />
  ),
  Callout,
  OfficialSource,
};
