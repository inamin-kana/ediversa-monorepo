import styles from "./CardList.module.css";

export type ListItem = { 
  id: string; 
  name: string;
  href: string;
  imageSrc?: string;
};

type Props = {
  items: ListItem[];
  ariaLabel?: string;
  className?: string;

  getImageSrc?: (item: ListItem) => string | undefined;
  getImageAlt?: (item: ListItem) => string;
};


export function CardList({
  items,
  ariaLabel,
  className,
  getImageSrc,
  getImageAlt,
}: Props) {
  return (
    <ul
      className={`${styles.cardList} ${className ?? ""}`.trim()}
      aria-label={ariaLabel}
    >
      {items.map((item) => {
        const img = item.imageSrc ?? getImageSrc?.(item);
        const alt = getImageAlt?.(item) ?? item.name;

        return (
          <li key={item.id} className={styles.card__item}>
            <a href={item.href} className={styles.card__link}>
              {img && (
                <div className={styles.card__img}>
                  <img 
                    src={img} 
                    alt={alt} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <span className={styles.card__name}>{item.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}