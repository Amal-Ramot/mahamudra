"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Meditation.module.css";

const DURATIONS = [5, 10, 20, 30];

const GUIDANCE = [
  { at: 0, title: "הגוף", text: "שבו זקופים ונינוחים. הגב ישר, הכתפיים רפויות, הידיים נחות בחיק. העיניים פקוחות למחצה, המבט רך." },
  { at: 0.1, title: "הנשימה", text: "הניחו לתשומת הלב לנוח בעדינות על הנשימה — על תחושת האוויר הנכנס ויוצא. אין צורך לשנות דבר." },
  { at: 0.25, title: "שמאתה", text: "כשהתודעה נודדת — פשוט שימו לב, וחזרו. בלי ביקורת. לא מתוח מדי, לא רופף מדי." },
  { at: 0.4, title: "לשחרר את המושא", text: "עכשיו שחררו גם את הנשימה. נוחו במודעות עצמה — פתוחה, ערה, כמו שמיים בהירים." },
  { at: 0.55, title: "להביט", text: "כשמחשבה עולה — הביטו בה. מאין היא באה? היכן היא? לאן היא הולכת? אל תחפשו תשובה — פשוט ראו." },
  { at: 0.7, title: "מי מביט?", text: "הפנו את המבט אל המביט. האם יש שם משהו למצוא? צבע, צורה, מקום? הלא-מציאה הזו — היא הראייה." },
  { at: 0.82, title: "שש המילים", text: "אל תיזכר. אל תדמיין. אל תחשוב. אל תבחן. אל תשלוט. נוח." },
  { at: 0.94, title: "הקדשה", text: "הקדישו את הטוב של התרגול הזה לכל היצורים — שיכירו כולם את טבע התודעה ויהיו חופשיים." },
];

function bell(ctx: AudioContext, gain = 0.35) {
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = gain;
  master.connect(ctx.destination);
  const base = 220;
  [1, 2.76, 5.4, 8.93].forEach((ratio, i) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = base * ratio;
    o.detune.value = (Math.random() - 0.5) * 6;
    const amp = [1, 0.5, 0.25, 0.12][i];
    const decay = [9, 6, 3.5, 2][i];
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(amp, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + decay);
    o.connect(g).connect(master);
    o.start(now);
    o.stop(now + decay + 0.1);
  });
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function Meditation() {
  const [minutes, setMinutes] = useState(10);
  const [remaining, setRemaining] = useState(10 * 60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const endRef = useRef(0);

  const ring = useCallback((times = 1) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    for (let i = 0; i < times; i++) setTimeout(() => bell(ctx), i * 2600);
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const left = Math.max(0, (endRef.current - Date.now()) / 1000);
      setRemaining(left);
      if (left <= 0) {
        setRunning(false);
        setDone(true);
        ring(3);
      }
    }, 250);
    return () => clearInterval(id);
  }, [running, ring]);

  const start = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctxRef.current = new AC();
    }
    ctxRef.current.resume();
    const secs = done || remaining <= 0 ? minutes * 60 : remaining;
    endRef.current = Date.now() + secs * 1000;
    setRemaining(secs);
    setDone(false);
    setRunning(true);
    if (secs === minutes * 60) ring(1);
  };

  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setDone(false);
    setRemaining(minutes * 60);
  };
  const choose = (m: number) => {
    if (running) return;
    setMinutes(m);
    setRemaining(m * 60);
    setDone(false);
  };

  const total = minutes * 60;
  const progress = 1 - remaining / total;
  const step = [...GUIDANCE].reverse().find((g) => progress >= g.at) ?? GUIDANCE[0];
  const C = 2 * Math.PI * 140;
  const started = running || remaining < total;

  return (
    <div className={styles.wrap}>
      <div className={styles.durations} role="radiogroup" aria-label="משך המדיטציה">
        {DURATIONS.map((m) => (
          <button key={m} role="radio" aria-checked={m === minutes} className={m === minutes ? styles.on : ""} onClick={() => choose(m)} disabled={running}>
            {m} דקות
          </button>
        ))}
      </div>

      <div className={styles.stage}>
        <div className={`${styles.breath} ${running ? styles.breathing : ""}`} />
        <svg viewBox="0 0 320 320" className={styles.ring} aria-hidden>
          <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(217,180,90,.12)" strokeWidth="2" />
          <circle cx="160" cy="160" r="140" fill="none" stroke="#d9b45a" strokeWidth="2.5" strokeLinecap="round" strokeDasharray={`${C * progress} ${C}`} transform="rotate(-90 160 160)" style={{ transition: "stroke-dasharray .3s linear", filter: "drop-shadow(0 0 6px rgba(217,180,90,.7))" }} />
        </svg>
        <div className={styles.center}>
          <div className="tib" style={{ color: "var(--gold)", fontSize: "1.6rem" }}>{done ? "སརྦ་མངྒ་ལཾ།" : "ཨཱཿ"}</div>
          <div className={styles.time} aria-live="off">{fmt(remaining)}</div>
          <div style={{ color: "var(--muted)", fontSize: ".9rem" }}>{done ? "התרגול הסתיים" : running ? (progress < 0.1 ? "" : "שאפו… ונשפו…") : started ? "בהשהיה" : "מוכנים?"}</div>
        </div>
      </div>

      <div className={styles.controls}>
        {!running ? (
          <button className="btn btn-solid" onClick={start}>{started && !done ? "המשך" : "התחל"}</button>
        ) : (
          <button className="btn" onClick={pause}>השהה</button>
        )}
        {started && <button className="btn" onClick={reset}>אפס</button>}
        <button className="btn" onClick={() => { if (!ctxRef.current) ctxRef.current = new AudioContext(); ctxRef.current.resume(); ring(1); }} aria-label="השמע פעמון">השמע פעמון</button>
      </div>

      <div className={`card ${styles.guide}`} aria-live="polite">
        <div className={styles.guideTitle}>{done ? "סיום" : step.title}</div>
        <p key={step.title + done} className={styles.guideText}>
          {done ? "שבו עוד רגע בשקט. שימו לב לאיכות התודעה עכשיו — ושאו אותה איתכם אל היום." : step.text}
        </p>
        <div className={styles.dots}>
          {GUIDANCE.map((g) => (
            <span key={g.title} className={progress >= g.at && started ? styles.dotOn : ""} title={g.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
