// export type PokemonList = {
//   results: { name: string; url: string }[]
// };

// async function fetchPokemons(limit: 150): Promise<PokemonList> {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=${limit}", { cache: "no-store" });
//   if (!res.ok) throw new Error("ERROR: No se pudo hacer fetch");
//   return res.json();
// }

