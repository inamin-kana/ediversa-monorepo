import type { PokemonList } from "../types/type";

export async function getPokemons(): Promise<PokemonList> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150", { cache: "no-store" });
  if (!res.ok) throw new Error("ERROR: No se pudo hacer fetch");
  return res.json();
}

