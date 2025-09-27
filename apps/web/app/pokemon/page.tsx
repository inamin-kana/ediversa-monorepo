import styles from "./pokemon.module.css";
import { CardList, type ListItem } from "@repo/ui";

type PokemonList = {
  results: { name: string; url: string }[]
};

async function getPokemons(): Promise<PokemonList> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150", { cache: "no-store" });
  if (!res.ok) throw new Error("ERROR: No se pudo hacer fetch");
  return res.json();
}

export default async function PokemonPage() {
  const data = await getPokemons();

  const items = data.results.map(item => {
    const id = item.url.split("/").filter(Boolean).pop()!;
    return { id, name: item.name };
  });

  const list: ListItem[] = items.map(({ id, name }) => ({
    id,
    name,
    href: `/pokemon/${id}`,
  }));

  const spriteUrl = (id: string | number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <main className={styles.mainWrap}>
      <div className={styles.pagePokemon}>
        <h1 className={styles.titleA}>Pokemon Book</h1>

        <CardList
          items={list}  
          className={styles.cardList}
          ariaLabel="Pokémon list"
          getImageSrc={(it) => spriteUrl(it.id)}
          getImageAlt={(it) => `Imágen de ${it.name}`}
        />
      </div>
    </main>
  );
}
