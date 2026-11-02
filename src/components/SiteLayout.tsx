import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, MessageCircle, Phone, MapPin, X } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-dra-gabriela-puig.svg.asset.json";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/servicios", label: "Servicios" },
  { to: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={overlay ? "absolute inset-x-0 top-0 z-30" : "relative z-30 bg-hero"}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link to="/" className="font-display text-2xl italic text-hero-foreground">
          Dra. Gabriela Puig<span className="text-accent">+</span>
        </Link>
        <nav className="hidden gap-2 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-md border-2 border-transparent px-4 py-1.5 font-display font-bold text-hero-foreground transition hover:border-hero-foreground/60"
              activeProps={{ className: "!border-hero-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="text-hero-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mx-5 mb-4 flex flex-col rounded-lg bg-card p-2 shadow-lg lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded px-4 py-3 font-semibold text-foreground hover:bg-muted">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-hero pb-14 pt-28 text-center text-hero-foreground">
      <SiteHeader overlay />
      <h1 className="px-5 font-display text-4xl md:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl px-5 font-display text-lg opacity-90">{subtitle}</p>}
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">{SITE.clinic}</h3>
          <p className="mt-2 text-sm opacity-80">{SITE.doctor}<br />{SITE.specialty} en {SITE.city}.</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-display text-lg">Contacto</h4>
          <p className="flex gap-2"><Phone className="size-4" /> <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></p>
          <p className="flex gap-2"><MapPin className="size-4 shrink-0" /> {SITE.address}</p>
          <p className="flex gap-2"><MessageCircle className="size-4" /> <a href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></p>
        </div>
        <div className="text-sm">
          <h4 className="font-display text-lg">Legales</h4>
          <Link to="/aviso-de-privacidad" className="mt-2 inline-block underline opacity-80">Aviso de Privacidad</Link>
          <p className="mt-3 opacity-70">La información de este sitio no sustituye una consulta. Todo diagnóstico requiere valoración presencial.</p>
        </div>
      </div>
      <p className="border-t border-footer-foreground/15 py-4 text-center text-xs opacity-70">© 2026 {SITE.doctor}. Todos los derechos reservados.</p>
    </footer>
  );
}

export function CtaButton({ children, href, variant = "solid" }: { children: ReactNode; href: string; variant?: "solid" | "outline" }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className={variant === "solid"
        ? "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg text-primary-foreground shadow-md transition hover:bg-primary/85"
        : "inline-flex items-center gap-2 rounded-md border-2 border-current px-5 py-2.5 transition hover:opacity-80"}>
      {children}
    </a>
  );
}
