import styles from "./Emblem.module.css";

/** Builds an "endless knot" (dpal be'u) ribbon path on a 45°-rotated lattice. */
function knotPath(a: number, n = 4) {
  const xs = Array.from({ length: n }, (_, i) => -a + (2 * a * (i + 0.5)) / n);
  const step = (2 * a) / n;
  const r = step / 2;
  const segs: string[] = [];
  // lattice lines
  xs.forEach((x) => {
    segs.push(`M${x},${-a}L${x},${a}`);
    segs.push(`M${-a},${x}L${a},${x}`);
  });
  // ears: pairs (0,1),(2,3) on each side
  for (let p = 0; p < n; p += 2) {
    const x0 = xs[p], x1 = xs[p + 1];
    // top (y=-a) & bottom (y=a)
    segs.push(`M${x0},${-a}A${r},${r} 0 1 1 ${x1},${-a}`);
    segs.push(`M${x0},${a}A${r},${r} 0 1 0 ${x1},${a}`);
    // left (x=-a) & right (x=a)
    segs.push(`M${-a},${x0}A${r},${r} 0 1 0 ${-a},${x1}`);
    segs.push(`M${a},${x0}A${r},${r} 0 1 1 ${a},${x1}`);
  }
  return segs.join("");
}

function petal(r1: number, r2: number, w: number) {
  const m = (r1 + r2) / 2;
  return `M0,${-r1}C${w},${-m} ${w * 0.6},${-r2 + 6} 0,${-r2}C${-w * 0.6},${-r2 + 6} ${-w},${-m} 0,${-r1}Z`;
}

const RING_TEXT =
  "ཕྱག་རྒྱ་ཆེན་པོ། ༄༅། སེམས་ཉིད་གཉུག་མ། ༄༅། ཕྱག་རྒྱ་ཆེན་པོ། ༄༅། ལྷན་ཅིག་སྐྱེས་སྦྱོར། ༄༅། ";

export default function Emblem() {
  const knot = knotPath(46);
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.halo} />
      <svg viewBox="-200 -200 400 400" className={styles.svg}>
        <defs>
          <radialGradient id="sky" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset="35%" stopColor="#bcd0ff" stopOpacity=".55" />
            <stop offset="75%" stopColor="#3b4f9a" stopOpacity=".18" />
            <stop offset="100%" stopColor="#0c0e1f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a87a2a" />
            <stop offset="45%" stopColor="#f7e2a6" />
            <stop offset="70%" stopColor="#d9b45a" />
            <stop offset="100%" stopColor="#8f6420" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id="ringPath" d="M0,-168A168,168 0 0 1 0,168A168,168 0 0 1 0,-168" />
        </defs>

        {/* outer rotating ring with Tibetan inscription */}
        <g className={styles.ringOuter}>
          <circle r="186" fill="none" stroke="url(#gold)" strokeWidth="1.2" opacity=".7" />
          <circle r="152" fill="none" stroke="url(#gold)" strokeWidth=".8" opacity=".5" />
          <text className={styles.ringText} fill="#e7c978">
            <textPath href="#ringPath" startOffset="0">
              {RING_TEXT}
            </textPath>
          </text>
          {Array.from({ length: 48 }).map((_, i) => (
            <line key={i} x1="0" y1="-186" x2="0" y2={i % 6 === 0 ? -178 : -182} stroke="#d9b45a" strokeWidth="1" opacity=".7" transform={`rotate(${i * 7.5})`} />
          ))}
        </g>

        {/* lotus petals */}
        <g className={styles.lotus}>
          {Array.from({ length: 16 }).map((_, i) => (
            <path key={`s${i}`} d={petal(100, 140, 18)} fill="none" stroke="#d9b45a" strokeWidth=".8" opacity=".45" transform={`rotate(${i * 22.5 + 11.25})`} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={`b${i}`} d={petal(96, 148, 32)} fill="rgba(217,180,90,.05)" stroke="url(#gold)" strokeWidth="1.3" transform={`rotate(${i * 45})`} filter="url(#glow)" />
          ))}
        </g>

        {/* open sky — the luminous mind */}
        <circle r="92" fill="url(#sky)" className={styles.sky} />
        <circle r="92" fill="none" stroke="url(#gold)" strokeWidth="1.6" filter="url(#glow)" />

        {/* cycling symbols */}
        <g className={`${styles.symbol} ${styles.s1}`} transform="rotate(45)">
          <path d={knot} fill="none" stroke="url(#gold)" strokeWidth="8" strokeLinecap="round" filter="url(#glow)" className={styles.draw} pathLength={1} />
          <path d={knot} fill="none" stroke="#141733" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g className={`${styles.symbol} ${styles.s2}`}>
          <text className={`${styles.syllable}`} textAnchor="middle" dominantBaseline="central" y="-6" fill="url(#gold)" filter="url(#glow)">
            ཨཱཿ
          </text>
        </g>
        <g className={`${styles.symbol} ${styles.s3}`}>
          {[
            ["#2b5cff", 58],
            ["#f2f2f2", 47],
            ["#e8c33a", 37],
            ["#d23b3b", 27],
            ["#3fae5a", 17],
          ].map(([c, r]) => (
            <circle key={c as string} r={r as number} fill="none" stroke={c as string} strokeWidth="7" opacity=".85" filter="url(#glow)" />
          ))}
          <circle r="7" fill="#fff" filter="url(#glow)" />
        </g>
      </svg>
    </div>
  );
}
