export type PokemonList = {
	results: { name: string; url: string }[];
};

export type Pokemon = {
	id: number;
	name: string;
	sprites: {
		front_default: string | null;
	};
	types: {
		type: { name: string };
	}[];
	stats: {
		base_stat: number;
		stat: { name: string };
	}[];
};
