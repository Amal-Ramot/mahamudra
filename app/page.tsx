import Link from "next/link";
import Emblem from "@/components/Emblem";
import Reveal from "@/components/Reveal";
import QuoteRotator from "@/components/QuoteRotator";
import s from "./page.module.css";

const SECTIONS = [
  { href: "/about/", icon: "ཨཱཿ", title: "מהי מהמודרה", text: "משמעות \"החותם הגדול\", הבסיס, הדרך והפרי, ושלושת סוגי המהמודרה." },
  { href: "/lineage/", icon: "☸", title: "שושלת הזהב", text: "מוורג'רדהרה, סרהה וטילופה, דרך נרופה, מרפה ומילרפה — ועד ימינו." },
  { href: "/texts/", icon: "༄༅", title: "טקסטי השורש", text: "שירת הגנגס, תפילת המשאלה, שש מילות העצה ועוד — מתורגמים לעברית." },
  { href: "/path/", icon: "❁", title: "הדרך והתרגול", text: "תרגולי ההכנה, שמאתה, ויפשיאנה, ההצבעה על טבע התודעה וההתנהלות." },
  { href: "/four-yogas/", icon: "◎", title: "ארבע היוגות", text: "חד-נקודתיות, פשטות, טעם אחד ואי-מדיטציה — שנים עשר שלבי המימוש." },
  { href: "/meditate/", icon: "ཧཱུྃ", title: "מדיטציה מודרכת", text: "שעון מדיטציה עם פעמון טיבטי והנחיות שלב-אחר-שלב לשהייה בטבע התודעה." },
  { href: "/glossary/", icon: "ཀ", title: "מילון מונחים", text: "המונחים המרכזיים בטיבטית, בתעתיק ובסנסקריט — עם הסבר בעברית." },
  { href: "/sources/", icon: "✦", title: "מקורות", text: "רשימת המקורות הטיבטיים, על שיטת התרגום, וקריאה נוספת." },
];

export default function Home() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.emblemIn}>
          <Emblem />
        </div>
        <div className={`tib ${s.tibTitle} ${s.fadeUp} ${s.d1}`}>ཕྱག་རྒྱ་ཆེན་པོ།</div>
        <h1 className={`gold-text ${s.title} ${s.fadeUp} ${s.d2}`}>מהמודרה</h1>
        <p className={`${s.subtitle} ${s.fadeUp} ${s.d3}`}>החותם הגדול — הכרת טבעה הטבעי, הצלול והחופשי של התודעה</p>
        <div className={`${s.ctas} ${s.fadeUp} ${s.d4}`}>
          <Link href="/about/" className="btn btn-solid">התחילו כאן</Link>
          <Link href="/texts/ganges/" className="btn">שירת הגנגס של טילופה</Link>
        </div>
        <div className={s.scroll} aria-hidden />
      </section>

      <section className="section">
        <div className={`container ${s.split}`}>
          <Reveal>
            <div className="eyebrow">התודעה כמו השמיים</div>
            <h2>מסורת של הכרה ישירה</h2>
            <p className="lead">
              מהמודרה — בטיבטית <span className="tib">ཕྱག་རྒྱ་ཆེན་པོ</span> (צ'אג-גיה צ'ן-פו) — היא אחת ההוראות העמוקות של הבודהיזם הטיבטי.
              היא אינה מבקשת לבנות דבר חדש, אלא להכיר במה שכבר נמצא כאן: התודעה עצמה, ריקה וצלולה, כמו שמיים פתוחים שבהם עננים של מחשבות באים והולכים.
            </p>
            <p style={{ color: "var(--muted)" }}>
              ההוראה עברה מן המהסידהות של הודו אל טיבט לפני כאלף שנים, ונשמרה בשרשרת בלתי נפסקת של מורים ותלמידים — בעיקר בשושלת הקאגיו, וגם בגלוג ובמסורות נוספות.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <blockquote className="verse">
              החלל — במה הוא נשען? על דבר אינו נשען.
              <br />
              כך גם המהמודרה: אין לה דבר להישען עליו.
              <br />
              אל תעשה דבר — הירגע במצב הטבעי.
              <br />
              כשהקשרים ישתחררו — השחרור ודאי.
              <cite>— טילופה, שירת הגנגס</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow">כל המסורת במקום אחד</div>
            <h2>מסע אל לב התודעה</h2>
          </Reveal>
          <div className="grid grid-3">
            {SECTIONS.map((sec, i) => (
              <Reveal key={sec.href} delay={(i % 3) * 120}>
                <Link href={sec.href} className={`card ${s.navCard}`}>
                  <div className={`${s.navIcon} ${/[ༀ-࿿]/.test(sec.icon) ? "tib" : ""}`}>{sec.icon}</div>
                  <h3>{sec.title}</h3>
                  <p>{sec.text}</p>
                  <span className={s.more}>להמשך ←</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow">בסיס · דרך · פרי</div>
            <h2>שלושה פנים של מהמודרה אחת</h2>
          </Reveal>
          <div className={s.triad}>
            {[
              { tib: "གཞི", w: "gzhi", t: "מהמודרה של הבסיס", d: "טבע התודעה כפי שהוא מאז ומעולם — ריק, צלול ובלתי נפסק. הוא אינו משתנה בין בלבול להתעוררות." },
              { tib: "ལམ", w: "lam", t: "מהמודרה של הדרך", d: "ההכרה בטבע הזה וההתרגלות אליו — באמצעות השקפה, מדיטציה והתנהלות, עד שההכרה נעשית טבעית." },
              { tib: "འབྲས་བུ", w: "'bras bu", t: "מהמודרה של הפרי", d: "המימוש המלא: הבסיס מתגלה במלואו כדהרמהקאיה, ופעילות החמלה זורמת ללא מאמץ למען כל היצורים." },
            ].map((x, i) => (
              <Reveal key={x.w} delay={i * 150}>
                <div className={`card ${s.triadItem}`}>
                  <span className="tib">{x.tib}</span>
                  <span className="wylie">{x.w}</span>
                  <h3 style={{ marginTop: 14 }}>{x.t}</h3>
                  <p style={{ color: "var(--muted)", margin: 0 }}>{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow">מפת המימוש</div>
            <h2>ארבע היוגות של מהמודרה</h2>
          </Reveal>
          <div className={s.yogas}>
            {[
              { n: "א", tib: "རྩེ་གཅིག", t: "חד-נקודתיות", d: "התודעה נחה ביציבות בטבעה" },
              { n: "ב", tib: "སྤྲོས་བྲལ", t: "פשטות", d: "חופש מכל מושג והרחבה" },
              { n: "ג", tib: "རོ་གཅིག", t: "טעם אחד", d: "כל הניגודים בטעם אחד" },
              { n: "ד", tib: "སྒོམ་མེད", t: "אי-מדיטציה", d: "אין עוד מה למדוט" },
            ].map((y, i) => (
              <Reveal key={y.n} delay={i * 150}>
                <div className={`card ${s.yoga}`}>
                  <div className={s.yogaNum}>{y.n}</div>
                  <span className="tib">{y.tib}</span>
                  <h3 style={{ margin: "6px 0 0" }}>{y.t}</h3>
                  <p>{y.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/four-yogas/" className="btn">לפירוט שנים עשר השלבים</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <QuoteRotator />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className={`card ${s.cta}`}>
              <div className="tib" style={{ fontSize: "2.4rem", color: "var(--gold)" }}>རང་སར་བཞག</div>
              <h2>נוח, כפי שאתה</h2>
              <p className="lead" style={{ margin: "0 auto 28px" }}>
                כמה דקות של שקט, פעמון טיבטי, והנחיה פשוטה ברוח שש מילות העצה של טילופה.
              </p>
              <Link href="/meditate/" className="btn btn-solid">לתרגול המודרך</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
