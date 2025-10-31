import { expect, it, describe } from "vitest";
import { getVerseOfTheDay as getVotd } from "../src/index.ts";

describe("VOTD", () => {
  it("Should Return VOTD", async () => {
    const verse = await getVotd("en");
    const verse2 = await getVotd("coffee");

    expect(verse?.citation).toBeDefined();
    expect(verse?.passage).toBeDefined();

    expect(verse2).toBeUndefined();
  }, 10000);
});
