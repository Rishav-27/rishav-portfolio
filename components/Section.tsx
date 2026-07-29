import type { ReactNode, CSSProperties } from "react";

export const eyebrow: CSSProperties = {
  fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, color: "var(--faint)",
  letterSpacing: ".14em", marginBottom: 22,
};
export const h2: CSSProperties = {
  fontSize: "var(--h2)", lineHeight: 1.02, fontWeight: 800, letterSpacing: "-.04em", textWrap: "balance",
};

export default function Section({ id, children, style }: { id?: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <section id={id} style={{ padding: "var(--sec) var(--pad)", maxWidth: 1280, margin: "0 auto", borderTop: "1px solid var(--line)", ...style }}>
      {children}
    </section>
  );
}
