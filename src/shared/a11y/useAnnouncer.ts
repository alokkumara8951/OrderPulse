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
    // Append the monotonically increasing counter as invisible text so the
    // live region's content always differs between calls, guaranteeing
    // screen readers announce it even if the same message repeats.
    setMessage(`${text}${'\u200b'.repeat(counter.current)}`);
  }, []);

  return { message, announce };
}
