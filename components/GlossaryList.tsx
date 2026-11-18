"use client";
import { useMemo, useState } from "react";
import { GLOSSARY, type Term } from "@/content/glossary";

const CATS: ("הכול" | Term["cat"])[] = ["הכול", "יסוד", "השקפה", "תרגול", "פרי", "שושלת"];

export default function GlossaryList() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATS)[number]>("הכול");
  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    return GLOSSARY.filter((t) => (cat === "הכול" || t.cat === cat) && (!k || [t.he, t.tib, t.wylie, t.skt ?? "", t.def].some((f) => f.toLowerCase().includes(k))));
  }, [q, cat]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, marginBottom: 40 }}>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="חיפוש — בעברית, בטיבטית או בתעתיק…"
          aria-label="חיפוש במילון"
          style={{ width: "min(100%, 520px)", padding: "14px 22px", borderRadius: 999, border: "1px solid var(--border-strong)", background: "rgba(12,14,31,.8)", color: "var(--text)", fontSize: "1.05rem", fontFamily: "inherit", outline: "none" }}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                fontFamily: "inherit", fontSize: ".95rem", padding: "6px 16px", borderRadius: 999, cursor: "pointer",
                border: "1px solid var(--border)",
                background: c === cat ? "rgba(217,180,90,.18)" : "transparent",
                color: c === cat ? "var(--gold-soft)" : "var(--muted)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-2">
        {list.map((t) => (
          <article key={t.wylie} className="card" style={{ padding: 26 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
              <h3 style={{ margin: 0, fontSize: "1.35rem" }}>{t.he}</h3>
              <span className="tag">{t.cat}</span>
            </div>
            <div style={{ margin: "8px 0 12px", display: "flex", gap: 14, flexWrap: "wrap", alignItems: "baseline" }}>
              <span className="tib" style={{ fontSize: "1.5rem", color: "var(--gold)" }}>{t.tib}</span>
              <span className="wylie" style={{ fontSize: ".95rem" }}>{t.wylie}</span>
              {t.skt && <span className="wylie" style={{ fontSize: ".9rem", color: "var(--sky)" }}>skt. {t.skt}</span>}
            </div>
            <p style={{ margin: 0, color: "#d6cfbe", fontSize: "1rem" }}>{t.def}</p>
          </article>
        ))}
      </div>
      {!list.length && <p style={{ textAlign: "center", color: "var(--muted)" }}>לא נמצאו מונחים. כמו התודעה — ריק, אך פתוח לכל אפשרות.</p>}
    </>
  );
}
