import { createFileRoute } from "@tanstack/react-router";
import sobremi from "@/assets/sobremi.avif.asset.json";
import { PageHero } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Dra. Gabriela Puig Morales, ginecóloga en Teziutlán" },
      { name: "description", content: "Conoce a la Dra. Gabriela Puig Morales, ginecoobstetra formada en la BUAP con alta especialización en Costa Rica." },
      { property: "og:title", content: "Sobre la Dra. Gabriela Puig Morales" },
      { property: "og:description", content: "Ginecóloga y obstetra dedicada al cuidado integral de la mujer en Teziutlán, Puebla." },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <>
      <PageHero title="Sobre mí" subtitle="Médica especialista dedicada al cuidado integral de la mujer" />
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-14 md:grid-cols-2">
        <img src={sobremi.url} alt={SITE.doctor} className="w-full rounded-lg object-cover shadow-lg" />
        <div>
          <h2 className="text-4xl">{SITE.doctor}</h2>
          <p className="mt-2 font-display text-lg text-primary">Obstetra y Ginecóloga</p>
          <p className="mt-5 text-lg">Médico especialista dedicada al cuidado integral de la mujer, con una sólida formación académica en la Benemérita Universidad Autónoma de Puebla (BUAP) y estudios de alta especialización realizados en Costa Rica.</p>
          <div className="mt-6 rounded-lg bg-muted p-6">
            <h3 className="font-display text-xl font-bold">Especialidades principales</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Papanicolau y Colposcopía</li>
              <li>Atención de Partos y Cesáreas</li>
              <li>Histerectomías e Histeroscopias</li>
              <li>Control de Menopausia</li>
              <li>Planificación Familiar</li>
            </ul>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Cédula profesional: [pendiente]</p>
        </div>
      </section>
    </>
  );
}
