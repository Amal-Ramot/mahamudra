import type { ReactNode } from "react";

export default function PageHero({ tib, eyebrow, title, children }: { tib?: string; eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        {tib && <span className="tib tib-title">{tib}</span>}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="gold-text">{title}</h1>
        {children && <div className="lead">{children}</div>}
        <div className="divider" aria-hidden>✦</div>
      </div>
    </section>
  );
}
