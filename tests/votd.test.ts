import { getVotd } from "../src/functions/votd";

describe("getVotd", () => {
    it("VOTD", async () => {
        const verse = await getVotd();

        expect(verse?.citation).toBeDefined();
        expect(verse?.passage).toBeDefined();
    });
});