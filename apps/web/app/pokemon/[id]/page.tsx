import styles from "../../page.module.css";

type Pokemon = {
  id: number; 
  name: string;
  sprites: { 
    front_default: string | null 
  };
  types: { 
    type: { name: string } 
  }[];
  stats: {
    base_stat: number; 
    stat: { name: string } 
  }[];
};

export default async function PokemonDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`, { cache: "no-store" });
  if (!res.ok) return <p>ERROR: Not found</p>;
  const p = (await res.json()) as Pokemon;

  return (
    <>
      <a href="/pokemon" className={styles.buttonBack} aria-label="Volver a la página de Pokemon list">←  Back</a>

      <main className={styles.mainWrap}>
        <div className={styles.contentsPokemon}>
          <h1 className={styles.titleA}>{p.name}</h1>
          <div className={styles.pokemon__img}>
            {p.sprites.front_default && (
              <img 
              src={p.sprites.front_default} 
              alt={`Imagen de ${p.name}`} 
              />
            )}
          </div>
          <div className={styles.pokemon__type}>
            Types: 
            {p.types.map(t => t.type.name).join(", ")}
          </div>
          <div className={styles.pokemon__dlWrap}>
            <h2 className={styles.titleB}>Base stats</h2>
            <dl className={styles.pokemon__dl}>
              <div className={styles.pokemon__dlItem}>
                <dt>Stat</dt>
                <dd>Value</dd>
              </div>
              {p.stats.map(s => (
                <div key={s.stat.name} className={styles.pokemon__dlItem}>
                  <dt>{s.stat.name}</dt>
                  <dd>{s.base_stat}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
    </>
  );
}
