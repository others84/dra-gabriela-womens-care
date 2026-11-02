import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { CtaButton, PageHero } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y ubicación | Ginecóloga en Teziutlán" },
      { name: "description", content: "Agenda tu cita: Privada 19 Sur 1915, Centro, Teziutlán, Puebla. Tel. 222 330 2899." },
      { property: "og:title", content: "Contacto | Dra. Gabriela Puig Morales" },
      { property: "og:description", content: "Ubicación, teléfono y WhatsApp para agendar tu cita en Teziutlán." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <PageHero title="Ubicación y citas" />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-3xl">Contacto directo</h2>
          <p className="flex gap-3 text-lg"><Phone className="text-primary" /> <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></p>
          <p className="flex gap-3 text-lg"><MapPin className="shrink-0 text-primary" /> {SITE.address}</p>
          <p className="text-muted-foreground">Ubicación accesible para pacientes de zonas rurales y afueras de Teziutlán.</p>
          <p className="text-muted-foreground">Horarios: [pendiente]</p>
          <CtaButton href={SITE.whatsapp}><MessageCircle className="size-5" /> Agendar cita ahora</CtaButton>
          <div className="rounded-lg border-2 border-dashed border-border p-6 text-muted-foreground">
            Formulario de contacto: [pendiente]
          </div>
        </div>
        <iframe title="Mapa del consultorio" src={SITE.mapSrc} className="h-[420px] w-full rounded-lg border-0" loading="lazy" />
      </section>
    </>
  );
}
