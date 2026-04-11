import { servicePages } from "@/lib/pages-data";

describe("servicePages", () => {
  it("contains all required service pages", () => {
    expect(servicePages).toHaveLength(6);
  });

  it("ensures every page has faq and process steps", () => {
    servicePages.forEach((page) => {
      expect(page.faq.length).toBeGreaterThanOrEqual(3);
      expect(page.process).toHaveLength(4);
      expect(page.title.length).toBeGreaterThan(10);
      expect(page.description.length).toBeGreaterThan(30);
    });
  });
});
