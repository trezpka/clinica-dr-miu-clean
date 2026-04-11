import { buildMetadata } from "@/lib/seo";

describe("buildMetadata", () => {
  it("returns canonical URL", () => {
    const metadata = buildMetadata({
      title: "Test",
      description: "Descriere test suficient de lungă",
      path: "/implant-dentar-buzau",
    });

    expect(metadata.alternates?.canonical).toBe("https://www.clinicadrmiu.ro/implant-dentar-buzau");
  });

  it("returns open graph data", () => {
    const metadata = buildMetadata({
      title: "Test",
      description: "Descriere test suficient de lungă",
      path: "/implant-dentar-buzau",
    });

    expect(metadata.openGraph?.title).toBe("Test");
    expect(metadata.openGraph?.description).toBe("Descriere test suficient de lungă");
  });
});
