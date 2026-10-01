import { useCallback, useRef, useState } from 'react';

/**
 * Centralized aria-live announcer. Any feature that needs to tell assistive
 * technology about an important, non-focus-changing update (stream status,
 * optimistic action result, KPI milestones) calls `announce()` instead of
 * rendering its own live region, keeping behaviour consistent app-wide.
 */
export function useAnnouncer() {
  const [message, setMessage] = useState('');
  const counter = useRef(0);

  const announce = useCallback((text: string) => {
    // Cycle through a small, bounded number of invisible suffixes so the
    // live region's content differs between consecutive calls (guaranteeing
    // screen readers announce repeats), without growing unbounded over a
    // long-lived session with many live updates.
    counter.current = (counter.current + 1) % 7;
    setMessage(`${text}${'\u200b'.repeat(counter.current)}`);
  }, []);

  return { message, announce };
}
