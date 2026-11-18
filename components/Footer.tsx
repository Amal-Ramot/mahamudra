import Link from "next/link";
import { NAV_LINKS } from "./navLinks";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "56px 0 40px", background: "rgba(5,6,13,.6)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="tib" style={{ fontSize: "1.8rem", color: "var(--gold)", marginBottom: 6 }}>ཕྱག་རྒྱ་ཆེན་པོ།</div>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", marginBottom: 24 }}>מהמודרה · החותם הגדול</p>
        <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 22px", marginBottom: 28 }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--muted)", fontSize: ".95rem" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p style={{ color: "var(--muted)", fontSize: ".85rem", maxWidth: 680, margin: "0 auto" }}>
          אתר לימודי ללא מטרות רווח. התרגומים נעשו מן המקורות הטיבטיים בהשוואה לתרגומים מקובלים, ונועדו להנגשה ולעיון בלבד —
          תרגול מהמודרה מסורתי נעשה בהדרכת מורה מוסמך.
        </p>
        <p className="tib" style={{ color: "var(--gold)", opacity: .6, marginTop: 20 }}>སརྦ་མངྒ་ལཾ།</p>
      </div>
    </footer>
  );
}
