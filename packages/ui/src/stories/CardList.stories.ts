// import type { Meta, StoryObj } from "@storybook/react";
// import { CardList, type ListItem } from "../components/CardList/CardList";

// const spriteUrl = (id: string | number) =>
//   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

// const sample: ListItem[] = [
//   { id: "1", name: "Bulbasaur", href: "/pokemon/1" },
//   { id: "2", name: "Ivysaur",   href: "/pokemon/2" },
//   { id: "3", name: "Venusaur",  href: "/pokemon/3" },
//   { id: "4", name: "Charmander",href: "/pokemon/4" },
// ];

// const meta = {
//   title: "Components/CardList",
//   component: CardList,
//   tags: ["autodocs"],
//   parameters: {
//     controls: { expanded: true },
//     docs: {
//       description: {
//         component: [
//           "Es un link card list. El contenido del card se muestra a partir de un array de `items` (`id`, `name` y `href`).",
//           "Si la URL de la imagen puede construirse del id, simplemente pase la función `getImageSrc` para que la imagen se muestre automáticamente.",
//         ].join("\n\n"),
//       },
//     },
//   },
//   argTypes: {
//     items: {
//       description:
//         "表示するアイテム配列。最低限 `id`, `name`, `href` が必要です。",
//       table: {
//         category: "Data",
//         type: {
//           summary: "ListItem[]",
//           detail:
//             "type ListItem = { id: string; name: string; href: string; imageSrc?: string }",
//         },
//       },
//       control: { type: "object" },
//     },
//     ariaLabel: {
//       description: "ul の aria-label（スクリーンリーダー向けの一覧説明）",
//       table: {
//         category: "A11y & Style",
//         type: { summary: "string" },
//         defaultValue: { summary: '"Items"' },
//       },
//       control: "text",
//     },
//     className: {
//       description: "外枠に追加するクラス（余白やレイアウトの調整用）",
//       table: {
//         category: "A11y & Style",
//         type: { summary: "string" },
//         defaultValue: { summary: "—" },
//       },
//       control: "text",
//     },
//     getImageSrc: {
//       description:
//         "各アイテムの画像URLを `id` などから動的に生成します（imageSrc が無い時に使用）。",
//       table: {
//         category: "Derivers",
//         type: { summary: "(item: ListItem) => string | undefined" },
//       },
//       control: false,
//     },
//     getImageAlt: {
//       description:
//         "画像の代替テキストを生成します（未指定時は自動で `item.name` が使われます）。",
//       table: {
//         category: "Derivers",
//         type: { summary: "(item: ListItem) => string" },
//         defaultValue: { summary: "item.name" },
//       },
//       control: false,
//     },
//   },
// } satisfies Meta<typeof CardList>;

// export default meta;
// type Story = StoryObj<typeof CardList>;

// export const Default: Story = {
//   args: {
//     items: sample,
//     ariaLabel: "Pokémon list",
//     getImageSrc: (it) => spriteUrl(it.id),
//     getImageAlt: (it) => `Image of ${it.name}`,
//   },
// };
// src/stories/CardList.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CardList, type ListItem } from "../components/CardList/CardList";

const spriteUrl = (id: string | number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const sample: ListItem[] = [
  { id: "1", name: "Bulbasaur",  href: "/pokemon/1" },
  { id: "2", name: "Ivysaur",    href: "/pokemon/2" },
  { id: "3", name: "Venusaur",   href: "/pokemon/3" },
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
      description:
        "{ id: string, name: string, href: string }",
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
    getImageAlt: (it) => `Image of ${it.name}`,
  },
};
