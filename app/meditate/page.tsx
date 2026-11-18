import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Meditation from "@/components/Meditation";

export const metadata: Metadata = { title: "מדיטציה מודרכת" };

export default function Meditate() {
  return (
    <>
      <PageHero tib="སེམས་རང་སར་བཞག" eyebrow="תרגול" title="מדיטציה מודרכת">
        בחרו משך זמן, שבו בנוחות, והניחו להנחיות להוביל אתכם — מן הגוף, אל הנשימה, אל התודעה עצמה.
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Meditation />
        </div>
      </section>
    </>
  );
}
