import { describe, it, expect, vi, beforeEach } from "vitest";
import * as api from "./api";

describe("getPokemons", () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it("CHECK: Success pattern", async () => {
		const mockJson = {
			results: [
				{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
			],
		};

		const fetchSpy = vi.spyOn(global, "fetch" as any).mockResolvedValue({
			ok: true,
			json: async () => mockJson,
		});

		const data = await api.getPokemons(10, 30);

		expect(fetchSpy).toHaveBeenCalledWith(
			"https://pokeapi.co/api/v2/pokemon?limit=10&offset=30",
			expect.objectContaining({ cache: "no-store" }),
		);
		expect(data).toEqual(mockJson);
	});

	it("CHECK: Not success pattern", async () => {
		vi.spyOn(global, "fetch" as any).mockResolvedValue({ ok: false });
		await expect(api.getPokemons()).rejects.toThrow();
	});
});
