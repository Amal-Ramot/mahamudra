import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GlossaryList from "@/components/GlossaryList";

export const metadata: Metadata = { title: "מילון מונחים" };

export default function Glossary() {
  return (
    <>
      <PageHero tib="ཚིག་མཛོད།" eyebrow="מונחים" title="מילון המהאמודרה">
        המונחים המרכזיים של המסורת — בטיבטית, בתעתיק ויילי, בסנסקריט, ובהסבר עברי.
      </PageHero>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <GlossaryList />
        </div>
      </section>
    </>
  );
}
