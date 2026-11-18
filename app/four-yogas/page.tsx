import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "ארבע היוגות" };

const YOGAS = [
  {
    he: "חד-נקודתיות",
    tib: "རྩེ་གཅིག",
    w: "rtse gcig",
    essence: "התודעה נחה ביציבות בטבעה הצלול, ללא היסח דעת.",
    desc: "ביוגה הראשונה המתרגל מכיר בטבע התודעה כאיחוד של בהירות וריקות, ומסוגל לשהות בו. חוויות של עונג, בהירות ואי-מחשבה עולות לעיתים קרובות, והמדיטציה עדיין תלויה במידה מסוימת במאמץ ובכוונה.",
    levels: [
      ["קטנה", "ההכרה בטבע התודעה מופיעה, אך היציבות רגעית. המתרגל נע בין שהייה לבין היסחפות אחר מחשבות, ונזקק למאמץ כדי לחזור."],
      ["בינונית", "השהייה נעשית יציבה, וניתן לנוח בטבע התודעה כמעט בכל עת שרוצים. החוויות נעשות עמוקות יותר."],
      ["גדולה", "המדיטציה נמשכת ללא הפסקה — ביום ובלילה, ואף בשינה. החוויות של עונג, בהירות ואי-מחשבה נוכחות כמעט תמיד."],
    ],
  },
  {
    he: "פשטות — חופש מהרחבה",
    tib: "སྤྲོས་བྲལ",
    w: "spros bral",
    essence: "ההכרה שטבע התודעה חופשי מכל מושג: לא נולד, לא שוהה, לא נעלם.",
    desc: "ביוגה השנייה, השהייה הופכת לראייה. המתרגל רואה שהתודעה חופשייה מ\"הרחבות\" מושגיות — מעבר לקיום ולאי-קיום, לעלייה ולהיעלמות, לאחד ולרבים. ההיאחזות בחוויות פוחתת, וההבנה של הריקות נעשית ישירה.",
    levels: [
      ["קטנה", "ההכרה בכך שהתודעה אינה נולדת, אינה שוהה ואינה נעלמת. נותרת עדיין אחיזה עדינה בריקות עצמה כ\"משהו\"."],
      ["בינונית", "האחיזה בריקות ובהופעות מתמוססת. המתרגל אינו נאחז עוד בקיצוניות של \"יש\" או \"אין\"."],
      ["גדולה", "החופש מהרחבה מלא — כל התופעות, הפנימיות והחיצוניות, נראות כחופשיות ממושגים. נותרת אחיזה עדינה רק בזמן שלאחר המדיטציה."],
    ],
  },
  {
    he: "טעם אחד",
    tib: "རོ་གཅིག",
    w: "ro gcig",
    essence: "כל הניגודים — סמסרה ונירוונה, הופעה וריקות — נחווים בטעם אחד.",
    desc: "ביוגה השלישית מתגלה כי כל התופעות, הטובות והרעות, הנעימות והכואבות, הן ביטוי של אותו טבע. \"כמו מלח הנמס במים\" — הכפילות בין מדיטציה לחיים, בין נאחז לאוחז, מתמוססת. כל דבר שעולה הופך למורה.",
    levels: [
      ["קטנה", "ההופעות והתודעה, סמסרה ונירוונה, מוכרות כבעלות טעם אחד — אך נותרת היאחזות עדינה בהכרה הזו עצמה."],
      ["בינונית", "האחיזה בנושא ובמושא מתמוססת. החוויות כולן נחוות כגילוי של חוכמה."],
      ["גדולה", "כל ההופעות נטעמות כאחד, והחוכמה עולה מכל דבר. המתרגל מתחיל להעניק השראה ותועלת לאחרים באופן ספונטני."],
    ],
  },
  {
    he: "אי-מדיטציה",
    tib: "སྒོམ་མེད",
    w: "sgom med",
    essence: "אין עוד מדיטציה ואין מי שמודט — המימוש שלם ובלתי נפסק.",
    desc: "ביוגה הרביעית אין עוד דבר לטפח, להשיג או לשמור. אין הבחנה בין זמן מדיטציה לזמן שאחריו. \"אור האם\" — טבע הבסיס — ו\"אור הבן\" — ההכרה בדרך — מתמזגים. זהו מימוש הדהרמהקאיה.",
    levels: [
      ["קטנה", "אין עוד מדיטציה ומודט, אך נותרים עקבות עדינים של בלבול בזמן שלאחר המדיטציה."],
      ["בינונית", "כמעט כל עקבות הבלבול טוהרו. המימוש רציף ביום ובלילה."],
      ["גדולה", "תודעת הבסיס (אלאיה) מתגלה כחוכמת המראה; אור האם ואור הבן מתאחדים לחלוטין. זוהי הבודהיות השלמה — פרי המהמודרה."],
    ],
  },
];

function Ring({ step }: { step: number }) {
  const C = 2 * Math.PI * 34;
  return (
    <svg viewBox="0 0 80 80" width="96" height="96" aria-hidden style={{ flex: "0 0 auto" }}>
      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(217,180,90,.15)" strokeWidth="3" />
      <circle cx="40" cy="40" r="34" fill="none" stroke="#d9b45a" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${(C * step) / 4} ${C}`} transform="rotate(-90 40 40)" style={{ filter: "drop-shadow(0 0 6px rgba(217,180,90,.6))" }} />
      <circle cx="40" cy="40" r={6 + step * 4} fill="rgba(241,220,160,.18)" />
      <text x="40" y="47" textAnchor="middle" fill="#f1dca0" fontSize="20" fontFamily="var(--font-serif)">{["א", "ב", "ג", "ד"][step - 1]}</text>
    </svg>
  );
}

export default function FourYogas() {
  return (
    <>
      <PageHero tib="རྣལ་འབྱོར་བཞི།" eyebrow="שנים עשר שלבי המימוש" title="ארבע היוגות">
        המפה שגמפופה ותלמידיו שרטטו למסע המהמודרה: ארבעה שלבים, ובכל אחד שלוש דרגות — קטנה, בינונית וגדולה.
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: 1000 }}>
          {YOGAS.map((y, i) => (
            <Reveal key={y.w}>
              <article className="card" style={{ padding: "36px clamp(20px, 4vw, 44px)" }}>
                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap", marginBottom: 18 }}>
                  <Ring step={i + 1} />
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <div style={{ color: "var(--gold)", fontSize: ".9rem", letterSpacing: ".15em" }}>היוגה ה{["ראשונה", "שנייה", "שלישית", "רביעית"][i]}</div>
                    <h2 style={{ margin: "4px 0" }}>{y.he}</h2>
                    <span className="tib" style={{ color: "var(--gold)", fontSize: "1.4rem" }}>{y.tib}</span> <span className="wylie">{y.w}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--gold-soft)" }}>{y.essence}</p>
                <p style={{ color: "#d6cfbe" }}>{y.desc}</p>
                <div className="grid grid-3" style={{ marginTop: 24, gap: 16 }}>
                  {y.levels.map(([lvl, d], j) => (
                    <div key={lvl} style={{ background: "rgba(255,255,255,.02)", border: "1px solid var(--border)", borderRadius: 14, padding: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ display: "flex", gap: 4 }}>
                          {[0, 1, 2].map((k) => (
                            <span key={k} style={{ width: 8, height: 8, borderRadius: "50%", background: k <= j ? "var(--gold)" : "rgba(217,180,90,.2)" }} />
                          ))}
                        </span>
                        <strong style={{ color: "var(--gold-soft)" }}>דרגה {lvl}</strong>
                      </div>
                      <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.75 }}>{d}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <div className="prose">
              <h2>על המפה — והשטח</h2>
              <p>
                ארבע היוגות מתוארות בפירוט רב ב&quot;אור הירח&quot; של דקפו טאשי נמגיאל ובכתבי גמפופה. המורים מזהירים: המפה אינה השטח. ההתקדמות אינה תמיד
                ליניארית, והשוואה עצמית מתמדת לשלבים עלולה להפוך למכשול. יש תלמידים שמממשים את השלבים בבת אחת, ויש שבהדרגה.
              </p>
              <p>
                לפי חלק מן הפרשנים, ניתן להקביל את היוגות לחמש הדרכים ולעשר הדרגות (בהומי) של הבודהיסטווה — למשל, ראיית הריקות הישירה ביוגת הפשטות כמקבילה
                לדרגה הראשונה. אך גם כאן קיימות פרשנויות שונות, והעיקר הוא התרגול עצמו.
              </p>
              <blockquote className="verse">
                שהה במצב שאין בו מדיטציה —
                <br />
                השג את מה שאין להשיג: זוהי המהמודרה.
                <cite>— טילופה, שירת הגנגס</cite>
              </blockquote>
              <div style={{ marginTop: 30 }}>
                <Link href="/meditate/" className="btn btn-solid">לתרגול מודרך</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
