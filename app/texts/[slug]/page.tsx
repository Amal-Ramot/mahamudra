import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { TEXTS, getText } from "@/content/texts";

export function generateStaticParams() {
  return TEXTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getText(slug);
  return { title: t?.title ?? "טקסט", description: t?.subtitle };
}

export default async function TextPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getText(slug);
  if (!t) notFound();
  const idx = TEXTS.findIndex((x) => x.slug === slug);
  const prev = TEXTS[idx - 1];
  const next = TEXTS[idx + 1];
  let n = 0;

  return (
    <>
      <PageHero tib={t.tib} eyebrow={`${t.author} · ${t.era}`} title={t.title}>
        {t.subtitle}
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <Reveal>
            {t.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : ""} style={i ? { color: "var(--muted)" } : undefined}>{p}</p>
            ))}
          </Reveal>
          <div className="divider" aria-hidden>❁</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {t.verses.map((v, i) => {
              const numbered = !v.heading;
              if (numbered) n++;
              return (
                <Reveal key={i}>
                  {v.heading && <h3 style={{ marginTop: i ? 24 : 0, color: "var(--gold)", fontSize: "1.2rem" }}>{v.heading}</h3>}
                  <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    {numbered && (
                      <span style={{ flex: "0 0 auto", width: 34, height: 34, borderRadius: "50%", border: "1px solid var(--border-strong)", display: "grid", placeItems: "center", fontSize: ".85rem", color: "var(--gold)", marginTop: 10 }}>{n}</span>
                    )}
                    <div style={{ flex: 1 }}>
                      {v.tib && (
                        <div style={{ marginBottom: 10, textAlign: "left" }}>
                          <div className="tib" style={{ fontSize: "1.45rem", color: "var(--gold-soft)", lineHeight: 1.8 }}>{v.tib}</div>
                          {v.wylie && <div className="wylie" style={{ fontSize: ".9rem" }}>{v.wylie}</div>}
                        </div>
                      )}
                      <blockquote className="verse" style={{ whiteSpace: "pre-line" }}>{v.he}</blockquote>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {t.closing && (
            <Reveal>
              <div className="divider" aria-hidden>✦</div>
              {t.closing.map((p, i) => <p key={i} style={{ color: "var(--muted)", fontStyle: "italic" }}>{p}</p>)}
            </Reveal>
          )}

          <nav style={{ display: "flex", justifyContent: "space-between", gap: 16, marginTop: 60, flexWrap: "wrap" }}>
            {prev ? <Link href={`/texts/${prev.slug}/`} className="btn">→ {prev.title}</Link> : <span />}
            <Link href="/texts/" className="btn">כל הטקסטים</Link>
            {next ? <Link href={`/texts/${next.slug}/`} className="btn">{next.title} ←</Link> : <span />}
          </nav>
        </div>
      </section>
    </>
  );
}
