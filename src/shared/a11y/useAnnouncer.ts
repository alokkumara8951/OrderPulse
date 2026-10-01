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
    counter.current += 1;
    // Prefix with a zero-width counter so repeated identical messages are
    // still announced by screen readers (live regions only announce diffs).
    setMessage(`${text}\u200b${'​'.repeat(counter.current % 2)}`);
  }, []);

  return { message, announce };
}
