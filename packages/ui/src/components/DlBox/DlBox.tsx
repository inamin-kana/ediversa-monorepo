import styles from "./DlBox.module.css";

export type StatItem = { name: string; value: number };

type Props = {
	title?: string;
	items: StatItem[];
	className?: string;
};

export function DlBox({ title, items, className }: Props) {
	return (
		<div className={`${styles.simpleDl__wrap} ${className ?? ""}`.trim()}>
			<h2 className={styles.titleB}>{title}</h2>
			<dl className={styles.simpleDl}>
				{items.map((s) => (
					<div key={s.name} className={styles.simpleDl__item}>
						<dt>{s.name}</dt>
						<dd>{s.value}</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
