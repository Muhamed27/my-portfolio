import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * دمج الكلاسات (Tailwind + clsx)
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

/**
 * التحقق إذا الموقع داخل iframe
 */
export const isIframe =
  typeof window !== "undefined" &&
  window.self !== window.top;