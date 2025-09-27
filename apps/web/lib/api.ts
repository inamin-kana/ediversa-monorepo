import type { PokemonList } from "../types/type";

export async function getPokemons(limit = 150, offset = 0): Promise<PokemonList> {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const res = await fetch(url, { cache: 'no-store' });
  
  if (!res.ok) throw new Error("ERROR: No se pudo hacer fetch");
  return res.json();
}

