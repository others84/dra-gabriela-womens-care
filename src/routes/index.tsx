import { createFileRoute, Link } from "@tanstack/react-router";
import { Baby, HeartPulse, Microscope, Flower2, MessageCircle } from "lucide-react";
import inicio from "@/assets/inicio.avif.asset.json";
import sobremi from "@/assets/sobremi.avif.asset.json";
import { SiteHeader, CtaButton } from "@/components/SiteLayout";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ginecóloga en Teziutlán | Dra. Gabriela Puig Morales" },
      { name: "description", content: "Atención ginecológica y obstétrica en Teziutlán, Puebla: control prenatal, partos, Papanicolau, menopausia y planificación familiar." },
      { property: "og:title", content: "Ginecóloga en Teziutlán | Dra. Gabriela Puig Morales" },
      { property: "og:description", content: "Cuidado profesional, cálido y accesible para la salud de la mujer en todas sus etapas." },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: Baby, title: "Control prenatal", text: "Seguimiento mes a mes de tu embarazo y de la salud de tu bebé." },
  { icon: Microscope, title: "Papanicolau", text: "Detección oportuna con Papanicolau y colposcopía." },
  { icon: HeartPulse, title: "Atención de partos", text: "Partos humanizados y cesáreas con seguridad hospitalaria." },
  { icon: Flower2, title: "Menopausia", text: "Orientación y tratamiento para vivir bien esta etapa." },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden text-hero-foreground">
        <img src={inicio.url} alt="Consultorio de ginecología en Teziutlán" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <SiteHeader overlay />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-36 text-center">
          <h1 className="font-display text-4xl leading-tight md:text-5xl">Atención Ginecológica y Obstétrica Especializada en Teziutlán</h1>
          <p className="mt-4 font-display text-xl opacity-95">Cuidado profesional, cálido y accesible para la salud de la mujer en todas sus etapas.</p>
          <div className="mt-8"><CtaButton href={SITE.whatsapp}><MessageCircle className="size-5" /> Agendar cita por WhatsApp</CtaButton></div>
          <div className="mt-14 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-3">
                <f.icon className="size-10 shrink-0" strokeWidth={1.5} />
                <div>
                  <h2 className="font-display text-2xl">{f.title}</h2>
                  <p className="mt-1 opacity-90">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-4xl md:text-5xl">Cuidado integral para la mujer</h2>
          <p className="mt-5 text-lg">Soy la {SITE.doctor}, médica especialista en ginecología y obstetricia, formada en la BUAP con estudios de alta especialización en Costa Rica.</p>
          <p className="mt-4 text-muted-foreground">Atención oportuna para pacientes de Teziutlán y comunidades vecinas, en un ambiente cálido y de confianza.</p>
          <div className="mt-7"><Link to="/sobre-mi" className="inline-flex rounded-full bg-primary px-9 py-4 text-lg text-primary-foreground hover:bg-primary/85">Conóceme</Link></div>
        </div>
        <img src={sobremi.url} alt={SITE.doctor} className="max-h-[460px] w-full rounded-lg object-cover" />
      </section>

      <section className="border-y-[14px] border-muted bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[200px_1fr_1fr]">
          <div>
            <h3 className="font-display text-sm font-bold text-primary">Nuestros servicios</h3>
            <ul className="mt-3 space-y-2">
              {SERVICES.slice(0, 6).map((s) => <li key={s.id}><Link to="/servicios" className="hover:text-primary">{s.title}</Link></li>)}
            </ul>
          </div>
          <div className="rounded-lg bg-muted p-7">
            <h3 className="text-2xl">Planificación familiar</h3>
            <p className="mt-4">Asesoría personalizada para elegir y colocar el método anticonceptivo más adecuado para ti.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/servicios" className="rounded bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/85">Ver servicios</Link>
              <Link to="/preguntas-frecuentes" className="rounded bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/85">Preguntas</Link>
            </div>
          </div>
          <div className="rounded-lg bg-footer p-7 text-footer-foreground">
            <h3 className="text-2xl">¿Tienes dudas? Escríbeme</h3>
            <p className="mt-4 opacity-90">Teléfono {SITE.phoneDisplay}. {SITE.address}.</p>
            <div className="mt-6"><CtaButton variant="outline" href={`tel:${SITE.phone}`}>Llamar ahora</CtaButton></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-center font-display text-4xl font-bold">Servicios destacados</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {SERVICES.filter((s) => s.img).slice(0, 3).map((s) => (
            <article key={s.id}>
              <h3 className="text-2xl">{s.title}</h3>
              <img src={s.img} alt={s.title} className="mt-4 h-56 w-full rounded-lg object-cover" />
              <p className="mt-4 text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
