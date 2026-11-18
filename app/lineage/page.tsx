import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ERAS, MASTERS, SCHOOLS, type Master } from "@/content/lineage";
import s from "./lineage.module.css";

export const metadata: Metadata = { title: "השושלת" };

export default function Lineage() {
  const groups = (Object.keys(ERAS) as Master["era"][]).map((era) => ({ era, list: MASTERS.filter((m) => m.era === era) }));
  return (
    <>
      <PageHero tib="བཀའ་བརྒྱུད་གསེར་ཕྲེང་།" eyebrow="שושלת הזהב" title="השושלת">
        &quot;מחרוזת הזהב&quot; — שרשרת בלתי נפסקת של מורים ותלמידים, מן המהסידהות של הודו ועד ימינו. כל חוליה בשרשרת מסרה לבאה אחריה לא רק מילים, אלא הכרה חיה.
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={s.timeline}>
            {groups.map(({ era, list }) => (
              <div key={era}>
                <Reveal className={s.era}>
                  <span>{ERAS[era]}</span>
                </Reveal>
                {list.map((m) => (
                  <Reveal key={m.name} className={s.item} as="article">
                    <span className={s.dot} aria-hidden />
                    <div className="card">
                      <div className={s.head}>
                        <h3>{m.name}</h3>
                        {m.tib && <span className={`tib ${s.tib}`}>{m.tib}</span>}
                      </div>
                      {m.dates && <div className={s.dates}>{m.dates}{m.wylie && <> · <span className="wylie">{m.wylie}</span></>}</div>}
                      <span className={s.role}>{m.title}</span>
                      <div className={s.bio}>
                        {m.bio.map((p, i) => <p key={i}>{p}</p>)}
                      </div>
                      {m.quote && (
                        <blockquote className={s.quote}>
                          “{m.quote.text}”<cite>— {m.quote.source}</cite>
                        </blockquote>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="eyebrow">ארבע הגדולות ושמונה הקטנות</div>
            <h2>אסכולות הקאגיו</h2>
            <p style={{ color: "var(--muted)", maxWidth: 720, margin: "0 auto" }}>
              מתלמידיו של גמפופה צמחו ארבע אסכולות &quot;גדולות&quot;, ומתלמידי פגמו דרופה — שמונה &quot;קטנות&quot;. הכינויים מתייחסים לסדר ההיווצרות, לא לחשיבות.
            </p>
          </Reveal>
          <div className={s.schools}>
            {SCHOOLS.great.map((x, i) => (
              <Reveal key={x.name} delay={i * 100}>
                <div className="card" style={{ height: "100%" }}>
                  <h3>{x.name}</h3>
                  <p style={{ color: "var(--gold-soft)", fontSize: ".95rem", marginBottom: 6 }}>מייסד: {x.founder}</p>
                  <p style={{ color: "var(--muted)", fontSize: ".95rem", margin: 0 }}>{x.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: 40 }}>
            <h3>שמונה האסכולות הקטנות</h3>
            <div className={s.minor}>
              {SCHOOLS.minor.map((m) => <span key={m} className="tag" style={{ fontSize: ".95rem", padding: "6px 16px" }}>{m}</span>)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
