import partos from "@/assets/atencion_partos.avif";
import cesarea from "@/assets/ceasriea.avif";
import prenatal from "@/assets/controlparental.avif";
import histerectomia from "@/assets/hsiterectomia.avif";
import menopausia from "@/assets/menopausia.avif";
import papanicolau from "@/assets/papnicolau.avif";
import planificacion from "@/assets/planificacion.avif";

export const SITE = {
  doctor: "Dra. Gabriela Puig Morales",
  clinic: "Clínica de la Mujer",
  specialty: "Ginecología y Obstetricia",
  city: "Teziutlán, Puebla",
  phone: "2223302899",
  phoneDisplay: "222 330 2899",
  whatsapp: "https://wa.me/522223302899",
  address: "Privada 19 Sur 1915, Centro, Teziutlán, Puebla",
  mapSrc:
    "https://www.google.com/maps?q=Privada+19+Sur+1915,+Teziutl%C3%A1n,+Puebla&output=embed",
};

export type Service = { id: string; title: string; desc: string; img?: string };

export const SERVICES: Service[] = [
  { id: "prenatal", title: "Embarazo y Control Prenatal", desc: "Seguimiento mes a mes para garantizar el desarrollo saludable de tu bebé y cuidar tu salud integral durante la gestación.", img: prenatal.url },
  { id: "papanicolau", title: "Papanicolau", desc: "Estudio preventivo indispensable para la detección oportuna de alteraciones o lesiones en el cuello uterino.", img: papanicolau.url },
  { id: "colposcopia", title: "Colposcopía", desc: "Examen detallado mediante microscopio especializado para evaluar el cuello uterino, la vagina y la vulva en búsqueda de lesiones." },
  { id: "menopausia", title: "Atención Integral de la Menopausia", desc: "Tratamiento y orientación médica para controlar bochornos, cambios hormonales y prevenir la osteoporosis en esta etapa.", img: menopausia.url },
  { id: "partos", title: "Atención de Partos Humanizados", desc: "Acompañamiento médico profesional durante el trabajo de parto, priorizando la seguridad y la comodidad de la mamá y el recién nacido.", img: partos.url },
  { id: "cesareas", title: "Cesáreas", desc: "Procedimientos quirúrgicos ejecutados con técnica avanzada, bajo las más estrictas normas de seguridad hospitalaria.", img: cesarea.url },
  { id: "histerectomias", title: "Histerectomías", desc: "Cirugía ginecológica realizada con técnica avanzada y bajo estrictas normas de seguridad hospitalaria.", img: histerectomia.url },
  { id: "histeroscopias", title: "Histeroscopias", desc: "Técnica mínimamente invasiva que permite visualizar el interior de la cavidad uterina para diagnóstico y tratamiento preciso." },
  { id: "planificacion", title: "Planificación Familiar", desc: "Asesoría médica personalizada en la elección y colocación de métodos anticonceptivos (DIU, implantes, métodos orales).", img: planificacion.url },
];

export const FAQS = [
  { q: "¿Cada cuánto debo realizarme el Papanicolau y la Colposcopía?", a: "Se recomienda realizarlo una vez al año a partir del inicio de la vida sexual activa, o antes si existe alguna sintomatología indicada por la médica." },
  { q: "¿Qué debo llevar a mi primera consulta de Control Prenatal?", a: "Es importante acudir con cualquier estudio previo (ultrasonidos, análisis de laboratorio) y una lista de antecedentes médicos familiares." },
  { q: "¿Atiende urgencias de parto a cualquier hora?", a: "Sí, la atención del parto y las urgencias obstétricas se programan y coordinan mediante comunicación telefónica previa para el internamiento." },
  { q: "¿Qué métodos de planificación familiar maneja en el consultorio?", a: "Se orienta y colocan dispositivos intrauterinos (DIU, SIU), implantes subdérmicos y se brinda asesoría para métodos orales u hormonales." },
  { q: "¿Se aceptan seguros médicos?", a: "[Pendiente: confirmar con la doctora]" },
  { q: "¿Cómo cancelo o cambio mi cita?", a: `Llámanos o escríbenos por WhatsApp al ${"222 330 2899"} con anticipación.` },
];
