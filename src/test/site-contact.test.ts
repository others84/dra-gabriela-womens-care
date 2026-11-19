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
