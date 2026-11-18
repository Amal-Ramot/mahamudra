import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { TEXTS } from "@/content/texts";

export const metadata: Metadata = { title: "טקסטי השורש" };

export default function Texts() {
  return (
    <>
      <PageHero tib="གཞུང་།" eyebrow="ספריית המקורות" title="טקסטי השורש">
        שירים, תפילות והוראות של מאסטרי המהאמודרה — מתורגמים לעברית מן הנוסח הטיבטי, בית אחר בית.
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            {TEXTS.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 2) * 150}>
                <Link href={`/texts/${t.slug}/`} className="card" style={{ display: "block", height: "100%", color: "var(--text)" }}>
                  <div className="tib" style={{ fontSize: "1.6rem", color: "var(--gold)", marginBottom: 4 }}>{t.tib}</div>
                  <div className="wylie" style={{ fontSize: ".9rem", marginBottom: 14 }}>{t.wylie}</div>
                  <h2 style={{ fontSize: "1.8rem", marginBottom: 6 }}>{t.title}</h2>
                  <p style={{ color: "var(--gold-soft)", marginBottom: 12 }}>{t.subtitle}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    <span className="tag">{t.author}</span>
                    <span className="tag">{t.era}</span>
                    <span className="tag">{t.verses.length} בתים</span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: ".98rem", margin: 0 }}>{t.intro[0].slice(0, 170)}…</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
