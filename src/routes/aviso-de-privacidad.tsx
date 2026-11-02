import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de Privacidad | Dra. Gabriela Puig Morales" },
      { name: "description", content: "Aviso de privacidad del consultorio de la Dra. Gabriela Puig Morales conforme a la LFPDPPP." },
      { property: "og:title", content: "Aviso de Privacidad | Dra. Gabriela Puig Morales" },
      { property: "og:description", content: "Cómo protegemos tus datos personales." },
    ],
  }),
  component: Aviso,
});

function Aviso() {
  return (
    <>
      <PageHero title="Aviso de Privacidad" />
      <section className="mx-auto max-w-3xl px-5 py-14 text-lg">
        <p>De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, el consultorio médico de la {SITE.doctor}, ubicado en Privada 19 Sur 1915, Teziutlán, Puebla, utiliza sus datos personales únicamente para la apertura de expedientes clínicos, agenda de citas y seguimiento de tratamientos médicos. Sus datos están protegidos bajo estricta confidencialidad médica.</p>
      </section>
    </>
  );
}
