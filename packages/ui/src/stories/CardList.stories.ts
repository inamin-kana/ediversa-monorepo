import type { Meta, StoryObj } from "@storybook/react";
import { CardList, type ListItem } from "../components/CardList/CardList";

const spriteUrl = (id: string | number) =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const sample: ListItem[] = [
	{ id: "1", name: "Bulbasaur", href: "/pokemon/1" },
	{ id: "2", name: "Ivysaur", href: "/pokemon/2" },
	{ id: "3", name: "Venusaur", href: "/pokemon/3" },
	{ id: "4", name: "Charmander", href: "/pokemon/4" },
];

const meta = {
	title: "Components/CardList",
	component: CardList,
	tags: ["autodocs"], // Docsタブを有効にしたい場合は残す
	parameters: {
		controls: { expanded: true },
		docs: {
			description: {
				component: [
					"Es un link card list. El contenido del card se muestra a partir de un array de `items` (`id`, `name` y `href`).",
					"Si la URL de la imagen puede construirse del id, simplemente pase la función `getImageSrc` para que la imagen se muestre automáticamente.",
				].join("\n\n"),
			},
		},
	},
	argTypes: {
		items: {
			description: "{ id: string, name: string, href: string }",
		},
	},
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
	args: {
		items: sample,
		ariaLabel: "Pokémon list",
		getImageSrc: (it) => spriteUrl(it.id),
		getImageAlt: (it) => `Imágen de ${it.name}`,
	},
};
