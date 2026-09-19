"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type GuideSearchProps = {
  /** Total number of guides rendered on the page. */
  total: number;
};

function subscribeToHistory(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function readUrlQuery() {
  return new URLSearchParams(window.location.search).get("q") ?? "";
}

/**
 * Filters the server-rendered guide list in the browser.
 *
 * The full list is already in the HTML, so filtering the DOM costs no extra
 * payload and lets /guides stay a static page rather than being server-rendered
 * once per query string.
 */
export function GuideSearch({ total }: GuideSearchProps) {
  // Typed input wins once the user touches the box; until then the URL does.
  // useSyncExternalStore gives a distinct server snapshot ("") so hydration
  // matches even when the page is loaded with ?q= already set.
  const [typed, setTyped] = useState<string | null>(null);
  const urlQuery = useSyncExternalStore(
    subscribeToHistory,
    readUrlQuery,
    () => "",
  );
  const query = typed ?? urlQuery;

  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);
  const emptyRef = useRef<HTMLParagraphElement>(null);

  // Pure DOM work — no React state is written here, so the filter can run as
  // an effect without triggering cascading renders.
  useEffect(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;

    for (const card of document.querySelectorAll<HTMLElement>(
      "[data-guide-card]",
    )) {
      const hay = card.dataset.guideHaystack ?? "";
      const hit = terms.every((term) => hay.includes(term));
      card.hidden = !hit;
      if (hit) visible += 1;
    }

    for (const section of document.querySelectorAll<HTMLElement>(
      "[data-pillar-section]",
    )) {
      const shown = section.querySelectorAll(
        "[data-guide-card]:not([hidden])",
      ).length;
      section.hidden = shown === 0;
      const counter = section.querySelector<HTMLElement>("[data-pillar-count]");
      if (counter) counter.textContent = `${shown} guides`;
    }

    if (countRef.current) {
      countRef.current.textContent = terms.length
        ? `${visible} of ${total} guides matching “${query.trim()}”`
        : `${total} published guides`;
    }
    if (emptyRef.current) {
      emptyRef.current.hidden = !(terms.length && visible === 0);
    }
    if (inputRef.current && inputRef.current.value !== query) {
      inputRef.current.value = query;
    }
  }, [query, total]);

  const onChange = useCallback((value: string) => {
    setTyped(value);
    const url = new URL(window.location.href);
    if (value.trim()) url.searchParams.set("q", value.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, []);

  const clear = useCallback(() => {
    if (inputRef.current) inputRef.current.value = "";
    onChange("");
    inputRef.current?.focus();
  }, [onChange]);

  return (
    <>
      <p
        ref={countRef}
        className="mt-3 text-sm text-ink-faint"
        role="status"
        aria-live="polite"
      >
        {`${total} published guides`}
      </p>

      <form
        className="mt-6 flex max-w-md gap-2"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block flex-1">
          <span className="sr-only">Search guides</span>
          <input
            ref={inputRef}
            type="search"
            name="q"
            placeholder="Search guides"
            autoComplete="off"
            onChange={(event) => onChange(event.target.value)}
            className="w-full rounded-sm border border-ink/20 bg-paper-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-tungsten focus:outline-2 focus:outline-tungsten"
          />
        </label>
        <button
          type="button"
          onClick={clear}
          className="shrink-0 rounded-sm border border-ink px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper"
        >
          Clear
        </button>
      </form>

      <p ref={emptyRef} hidden className="mt-6 max-w-prose text-ink-muted">
        No guides match that query. Try a pass type, neighbourhood, or agency
        name, or clear the search.
      </p>
    </>
  );
}
