import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteLayout";
import { FAQS } from "@/lib/site";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes | Ginecóloga en Teziutlán" },
      { name: "description", content: "Respuestas sobre Papanicolau, control prenatal, atención de partos y planificación familiar con la Dra. Gabriela Puig Morales." },
      { property: "og:title", content: "Preguntas frecuentes | Dra. Gabriela Puig Morales" },
      { property: "og:description", content: "Resuelve tus dudas antes de tu consulta ginecológica." },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero title="Preguntas frecuentes" />
      <section className="mx-auto max-w-3xl space-y-4 px-5 py-14">
        {FAQS.map((f) => (
          <details key={f.q} className="group rounded-lg bg-muted p-5 open:shadow-sm">
            <summary className="cursor-pointer list-none font-display text-xl font-bold marker:hidden">{f.q}</summary>
            <p className="mt-3">{f.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
