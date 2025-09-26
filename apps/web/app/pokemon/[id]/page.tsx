import styles from "../pokemon.module.css";
import { ButtonBack } from "@repo/ui";
import { DlBox, type StatItem } from "@repo/ui";

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

export default async function PokemonDetail(
  { params }: { params: Promise<{ id: string }>  }
) {
  const { id } = await params;                       

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: "no-store" });
  if (!res.ok) return <p>ERROR: Not found</p>;
  const pokemon = (await res.json()) as Pokemon;

  const items: StatItem[] = pokemon.stats.map((s) => ({
    name: s.stat.name,
    value: s.base_stat,
  }));

  return (
    <>
      <div className={styles.buttonWrap}>
        <ButtonBack href="/pokemon" label="Volver" />
      </div>

      <main className={styles.mainWrap}>
        <div className={styles.contentsPokemon}>
          <h1 className={styles.titleA}>{pokemon.name}</h1>
          <div className={styles.pokemon__img}>
            {pokemon.sprites.front_default && (
              <img 
              src={pokemon.sprites.front_default} 
              alt={`Imagen de ${pokemon.name}`} 
              />
            )}
          </div>
          <div className={styles.pokemon__type}>
            <span className={styles.pokemon__typeTitle}>Types:</span> 
            {pokemon.types.map(t => t.type.name).join(" / ")}
          </div>
          <DlBox title="Base stats" items={items} className={styles.pokemon__dlWrap} />
        </div>
      </main>
    </>
  );
}
