import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="tib tib-title">སྟོང་པ་ཉིད།</span>
        <h1 className="gold-text">ריק — כמו השמיים</h1>
        <p className="lead" style={{ margin: "0 auto 30px" }}>הדף שחיפשת אינו קיים. אולי זו הזדמנות טובה להביט במי שמחפש.</p>
        <Link href="/" className="btn">חזרה לדף הבית</Link>
      </div>
    </section>
  );
}
