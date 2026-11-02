import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope } from "lucide-react";
import { PageHero } from "@/components/SiteLayout";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de ginecología y obstetricia en Teziutlán | Dra. Puig" },
      { name: "description", content: "Control prenatal, Papanicolau, colposcopía, menopausia, partos, cesáreas, histerectomías, histeroscopias y planificación familiar." },
      { property: "og:title", content: "Servicios | Dra. Gabriela Puig Morales" },
      { property: "og:description", content: "Servicios de ginecología y obstetricia en Teziutlán, Puebla." },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero title="Servicios" subtitle="Atención para cada etapa de tu vida" />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.id} className="flex flex-col overflow-hidden rounded-lg bg-muted">
            {s.img ? (
              <img src={s.img} alt={s.title} className="h-56 w-full object-cover" />
            ) : (
              <div className="grid h-56 place-items-center bg-hero text-hero-foreground"><Stethoscope className="size-16" strokeWidth={1.2} /></div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-2xl">{s.title}</h2>
              <p className="mt-3 flex-1 text-muted-foreground">{s.desc}</p>
              <a href={`${SITE.whatsapp}?text=${encodeURIComponent(`Hola, quiero información sobre: ${s.title}`)}`} target="_blank" rel="noreferrer"
                className="mt-5 self-start rounded bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/85">Consultar por este servicio</a>
            </div>
          </article>
        ))}
      </section>
      <p className="mx-auto max-w-3xl px-5 pb-12 text-center text-sm text-muted-foreground">Esta información es orientativa. Cualquier diagnóstico requiere una consulta presencial.</p>
    </>
  );
}
