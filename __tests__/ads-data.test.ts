import { adSets, bannerMessages } from "@/lib/ads-data";

describe("ads data", () => {
  it("has at least one ad set", () => {
    expect(adSets.length).toBeGreaterThanOrEqual(1);
  });

  it("ensures ad set contains headlines and descriptions", () => {
    adSets.forEach((item) => {
      expect(item.headlines.length).toBeGreaterThanOrEqual(10);
      expect(item.descriptions.length).toBeGreaterThanOrEqual(3);
      expect(item.sitelinks.length).toBeGreaterThanOrEqual(2);
    });
  });

  it("has banner messages", () => {
    expect(bannerMessages.length).toBeGreaterThanOrEqual(4);
  });
});
