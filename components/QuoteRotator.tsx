"use client";
import { useEffect, useState } from "react";

const QUOTES = [
  { text: "כמו ערפילים ועננים העולים מן האדמה ונעלמים בשמיים — כך המחשבות העולות מן התודעה: כשרואים את התודעה עצמה, גלי המחשבה שוקטים.", src: "טילופה, שירת הגנגס" },
  { text: "התודעה לבדה היא זרע הכול: ממנה נובעים הקיום הסבסרי והנירוונה.", src: "סרהה, שירי הדוהה" },
  { text: "ברכו שהבלבול יתגלה כחוכמה.", src: "גמפופה, ארבע הדהרמות" },
  { text: "כשמביטים בתודעה — אין תודעה; היא ריקה ממהות. כשמביטים בשניהם — האחיזה הכפולה משתחררת מעצמה.", src: "הקרמפה השלישי, תפילת המשאלה" },
  { text: "לא ההופעות כובלות אותך — האחיזה בהן כובלת. חתוך את האחיזה, נרופה.", src: "טילופה" },
  { text: "מנורה אחת מסלקת בן רגע חשכה של אלף עידנים; כך רגע אחד של האור הצלול של התודעה.", src: "טילופה, שירת הגנגס" },
];

export default function QuoteRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % QUOTES.length), 8000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ position: "relative", minHeight: 260, display: "grid", placeItems: "center", textAlign: "center" }}>
      {QUOTES.map((q, idx) => (
        <figure
          key={idx}
          aria-hidden={idx !== i}
          style={{
            gridArea: "1 / 1",
            margin: 0,
            maxWidth: 820,
            opacity: idx === i ? 1 : 0,
            transform: idx === i ? "none" : "translateY(12px)",
            transition: "opacity 1.4s ease, transform 1.4s ease",
          }}
        >
          <blockquote style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: "clamp(1.3rem, 3vw, 1.9rem)", lineHeight: 1.7, color: "#f6efdc" }}>
            “{q.text}”
          </blockquote>
          <figcaption style={{ marginTop: 18, color: "var(--gold)", letterSpacing: ".08em" }}>— {q.src}</figcaption>
        </figure>
      ))}
      <div style={{ position: "absolute", bottom: -20, display: "flex", gap: 10 }}>
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`ציטוט ${idx + 1}`}
            style={{
              width: idx === i ? 26 : 8,
              height: 8,
              borderRadius: 8,
              border: 0,
              cursor: "pointer",
              background: idx === i ? "var(--gold)" : "rgba(217,180,90,.3)",
              transition: "all .4s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
