import { expect, it, describe } from 'vitest';
import { getVotd } from "../src/functions/votd";

describe("VOTD", () => {
    it("Should Return VOTD", async () => {
        const verse = await getVotd("en");
        const verse2 = await getVotd("coffee");

        expect(verse?.citation).toBeDefined();
        expect(verse?.passage).toBeDefined();

        expect(verse2).toBeUndefined();
    })
})