import { ReactNode } from "react";
import styles from "./CardList.module.css";

export type ListItem = { 
  id: string; 
  name: string;
  href: string;
  imageSrc?: string;
};

type Props<T extends ListItem = ListItem> = {
  items: T[];
  ariaLabel?: string;
  className?: string;

  getImageSrc?: (item: T) => string | undefined;
  getImageAlt?: (item: T) => string;
  renderItem?: (item: T) => ReactNode;
}


export function CardList<T extends ListItem>({
  items,
  ariaLabel = "Items",
  className,
  getImageSrc,
  getImageAlt,
  renderItem,
}: Props<T>) {
  return (
    <ul className={`${styles.cardList} ${className ?? ""}`.trim()} aria-label={ariaLabel}>
      {items.map((item) => {
        if (renderItem) {
          return <li key={item.id} className={styles.card__item}>{renderItem(item)}</li>;
        }

        const img = item.imageSrc ?? getImageSrc?.(item);
        const alt = getImageAlt?.(item) ?? item.name;

        return (
          <li key={item.id} className={styles.card__item}>
            <a href={item.href} className={styles.card__link}>
              {img && (
                <div className={styles.card__img}>
                  <img src={img} alt={alt} />
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