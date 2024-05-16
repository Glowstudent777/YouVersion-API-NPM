import { expect, it, describe } from 'vitest';
import { getVotd } from "../src/functions/votd";

describe("VOTD", () => {
    it("Should Return VOTD", async () => {
        const verse = await getVotd();

        expect(verse?.citation).toBeDefined();
        expect(verse?.passage).toBeDefined();
    })
})