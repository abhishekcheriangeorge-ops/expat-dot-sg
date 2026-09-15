"use client";

import { useEffect } from "react";

const HUBS = [
  { href: "/", label: "Home" },
  { href: "/arriving", label: "Arriving" },
  { href: "/living", label: "Living" },
  { href: "/guides", label: "Guides" },
  { href: "/journeys", label: "Journeys" },
  { href: "/tools", label: "Tools" },
] as const;

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Root layout fault recovery — hub equity without claiming error.tsx (#206). */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Georgia, 'Times New Roman', ui-serif, serif",
          background: "#f2eee6",
          color: "#1a1f1c",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            maxWidth: "42rem",
            padding: "5rem 1.25rem",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#c9923a",
            }}
          >
            Site error
          </p>
          <h1
            style={{
              margin: "1rem 0 0",
              fontSize: "2.25rem",
              lineHeight: 1.15,
            }}
          >
            The shell failed to render.
          </h1>
          <p
            style={{
              margin: "1.25rem 0 0",
              fontSize: "1.125rem",
              lineHeight: 1.55,
              color: "#4a524c",
            }}
          >
            A root-level fault stopped this view. Retry, or continue from a hub
            while the rest of the site stays reachable.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                border: 0,
                background: "#1a3d2e",
                color: "#f2eee6",
                padding: "0.65rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                alignSelf: "center",
                color: "#4a524c",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              Home
            </a>
          </div>
          <nav aria-label="Recovery hubs" style={{ marginTop: "3rem" }}>
            <p
              style={{
                margin: 0,
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6b736c",
              }}
            >
              Continue here
            </p>
            <p
              style={{
                margin: "1rem 0 0",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem 1.25rem",
                fontSize: "0.875rem",
              }}
            >
              {HUBS.map((hub) => (
                <a
                  key={hub.href}
                  href={hub.href}
                  style={{ color: "#1a3d2e", fontWeight: 600 }}
                >
                  {hub.label}
                </a>
              ))}
            </p>
          </nav>
        </div>
      </body>
    </html>
  );
}
