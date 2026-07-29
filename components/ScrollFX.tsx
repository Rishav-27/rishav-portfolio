"use client";
import { useScrollFX } from "./useScrollFX";

/** Mount once per page to enable reveal / grow / tilt behaviours. */
export default function ScrollFX() {
  useScrollFX();
  return null;
}
