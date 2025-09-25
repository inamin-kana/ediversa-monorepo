import styles from "../page.module.css";

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
    const id = item.url.split("/").filter(Boolean).pop();
    return { id, name: item.name };
  });

  return (
    <main className={styles.mainWrap}>
      <div className={styles.pagePokemon}>
        <h1 className={styles.titleA}>Pokemon Book</h1>

        <ul className={styles.cardList} aria-label="Pokémon list">
          {items.map(({ id, name }) => (
            <li key={id} className={styles.card__item}>
              <a href={`/pokemon/${id}`} className={styles.card__link}>
                <div className={styles.card__img}>
                  <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                    alt={`Imagen de ${name}`} 
                  />
                </div>
                <span className={styles.card__name}>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
