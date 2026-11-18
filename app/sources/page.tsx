import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "מקורות" };

const PRIMARY = [
  { tib: "ཕྱག་རྒྱ་ཆེན་པོ་གང་ག་མ།", he: "שירת הגנגס — טילופה", note: "בתרגומו הטיבטי של מרפה; נשמר באוספים טיבטיים של הוראות הקאגיו, ובהם \"אוצר ההוראות\" (גדמס נגג דזו) שאסף ג'מגון קונגטרול." },
  { tib: "ངེས་དོན་ཕྱག་རྒྱ་ཆེན་པོའི་སྨོན་ལམ།", he: "תפילת המשאלה של המהמודרה — הקרמפה השלישי", note: "הטקסט מושר בכל מרכזי הקאגיו; קיימים לו פירושים של ג'מגון קונגטרול, טראנגו רינפוצ'ה ואחרים." },
  { tib: "དོ་ཧ་མཛོད།", he: "אוצר שירי הדוהה — סרהה", note: "נשמר בקנון הטיבטי (טנג'ור), בחלק העוסק בטנטרה." },
  { tib: "ཕྱག་ཆེན་ཟླ་བའི་འོད་ཟེར།", he: "אור הירח — דקפו טאשי נמגיאל", note: "המדריך המקיף לשלבי המדיטציה וארבע היוגות." },
  { tib: "ཕྱག་ཆེན་ངེས་དོན་རྒྱ་མཚོ།", he: "אוקיינוס המשמעות הוודאית — הקרמפה התשיעי", note: "מדריך תרגול מעשי, שלב אחר שלב." },
  { tib: "དམ་ཆོས་ཡིད་བཞིན་ནོར་བུ་ཐར་པ་རིན་པོ་ཆེའི་རྒྱན།", he: "עדי היקר של השחרור — גמפופה", note: "המדריך הקלאסי לדרך ההדרגתית." },
  { tib: "རྗེ་བཙུན་མི་ལ་རས་པའི་མགུར་འབུམ།", he: "מאה אלף השירים של מילרפה", note: "בעריכת צאנג ניון הרוקה (המאה ה־15)." },
  { tib: "རྒྱལ་བའི་གཞུང་ལམ།", he: "הדרך המרכזית של המנצחים — הפנצ'ן למה הראשון", note: "טקסט השורש של מהמודרה במסורת הגלוג." },
];

export default function Sources() {
  return (
    <>
      <PageHero tib="ཁུངས།" eyebrow="מקורות ושיטה" title="מקורות">
        על המקורות הטיבטיים שעליהם מבוסס האתר, על שיטת התרגום, ועל קריאה נוספת.
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <Reveal>
            <h2>על התרגום</h2>
            <p>
              בעברית כמעט אין חומר על מסורת המהמודרה. האתר נועד לרכז את עיקרי המסורת במקום אחד. התרגומים כאן נעשו מן הנוסחים הטיבטיים, תוך השוואה לתרגומים
              מקובלים לאנגלית. בחרנו בעברית בהירה ונגישה, שתשמור ככל האפשר על הפשטות הישירה ועל השירה של המקור.
            </p>
            <p>
              הטיבטית הקלאסית תמציתית מאוד, ולמונחים רבים יש שכבות של משמעות שאין להן מקבילה מדויקת בעברית. לכן הוספנו לצד מונחים מרכזיים את המילה הטיבטית
              ואת התעתיק (בשיטת ויילי), וריכזנו אותם ב<a href="../glossary/">מילון</a>. במקומות שבהם קיימות פרשנויות שונות — ציינו זאת.
            </p>
            <div className="card" style={{ borderColor: "var(--border-strong)", margin: "28px 0" }}>
              <p style={{ margin: 0 }}>
                <strong>הבהרה:</strong> אלה תרגומים לצורכי לימוד והנגשה, והם אינם מחליפים מהדורות מחקריות. מי שמעוניין להעמיק — מומלץ לו לבדוק את התרגומים מול המקור
                ולעיין בהם בהדרכת מורה מוסמך של המסורת. הערות ותיקונים יתקבלו בברכה.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <h2>המקורות הטיבטיים העיקריים</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 20 }}>
            {PRIMARY.map((p, i) => (
              <Reveal key={p.he} delay={(i % 3) * 80}>
                <div className="card" style={{ padding: 22 }}>
                  <div className="tib" style={{ color: "var(--gold)", fontSize: "1.3rem", textAlign: "left" }}>{p.tib}</div>
                  <h3 style={{ margin: "6px 0", fontSize: "1.2rem" }}>{p.he}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: ".95rem" }}>{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2>לקריאה נוספת (באנגלית)</h2>
            <ul>
              <li>Dakpo Tashi Namgyal, <em>Mahamudra: The Moonlight</em>, tr. Lobsang P. Lhalungpa.</li>
              <li>The Ninth Karmapa Wangchuk Dorje, <em>Mahamudra: The Ocean of Definitive Meaning</em>.</li>
              <li>Thrangu Rinpoche, <em>Essentials of Mahamudra</em>.</li>
              <li>Jamgön Kongtrul, <em>The Treasury of Knowledge</em>, Book Eight, Part Four.</li>
              <li>Gampopa, <em>The Jewel Ornament of Liberation</em>.</li>
              <li>Roger R. Jackson, <em>Mind Seeing Mind: Mahāmudrā and the Geluk Tradition of Tibetan Buddhism</em>.</li>
              <li>Khenchen Thrangu, <em>The Ninth Karmapa&apos;s Ocean of Definitive Meaning</em>.</li>
              <li>Yongey Mingyur Rinpoche, <em>The Joy of Living</em>.</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2>כתיב השמות</h2>
            <p>
              שמות טיבטיים נכתבו בעברית לפי ההגייה המקובלת (למשל &quot;מילרפה&quot; ולא &quot;מי-לה-רס-פה&quot;), והכתיב המדויק מופיע בתעתיק ויילי לצד השם.
              מונחים סנסקריטיים מוכרים — כמו סמסרה, נירוונה, דהרמה ובודהיסטווה — נשארו בצורתם המקובלת.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
