import { describe, expect, it } from "vitest";

import { FAQS, SITE } from "@/lib/site";

// The contact number is a business fact the doctor set: 2311381947.
describe("Contact number", () => {
  it("uses 2311381947 for calls, display and WhatsApp", () => {
    expect(SITE.phone).toBe("2311381947");
    expect(SITE.phoneDisplay).toBe("231 138 1947");
    expect(SITE.whatsapp).toBe("https://wa.me/522311381947");
  });

  it("never shows the retired number 222 330 2899 anywhere", () => {
    const text = JSON.stringify({ ...SITE, FAQS });
    expect(text).not.toContain("2223302899");
    expect(text).not.toContain("222 330 2899");
  });

  it("points the cancel-a-cita answer at the current number", () => {
    const faq = FAQS.find((f) => f.q.includes("cancelo"));
    expect(faq?.a).toContain(SITE.phoneDisplay);
  });
});

// The office moved: Miguel Hidalgo 410-3, Edificio CEMS, Centro, CP 73800.
describe("Office address and map", () => {
  it("shows the Miguel Hidalgo 410-3 address with building and zip", () => {
    expect(SITE.address).toBe(
      "Calle Miguel Hidalgo 410-3, Edificio CEMS, Col. Centro, Teziutlán, Puebla, CP 73800",
    );
    expect(SITE.addressNote).toBe(
      "A un lado de Laboratorio Belab, entre JC Bonilla y Nigromante.",
    );
  });

  it("embeds the office's own Google Maps place, not a street search", () => {
    expect(SITE.mapSrc).toContain("cid=13209014199235619821");
    expect(SITE.mapSrc).toContain("output=embed");
  });

  it("no longer mentions the old Privada 19 Sur address", () => {
    const text = JSON.stringify({ ...SITE, FAQS });
    expect(text).not.toContain("Privada 19 Sur");
    expect(text).not.toContain("1915");
  });
});
