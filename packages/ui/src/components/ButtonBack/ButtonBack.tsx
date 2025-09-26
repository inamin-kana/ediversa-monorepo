import React from "react";
import styles from "./ButtonBack.module.css";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  label?: string;
};

export function ButtonBack({ href, label = "Back", ...rest }: Props) {
  return (
    <a href={href} aria-label={`Button ` + label} className={styles.buttonBack} {...rest}>
      ← {label}
    </a>
  );
}