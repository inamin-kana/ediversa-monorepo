import type { Meta, StoryObj } from "@storybook/react";
import { DlBox, type StatItem } from "../components/DlBox/DlBox";

const sample: StatItem[] = [
  { name: "hp", value: 45 },
  { name: "attack", value: 49 },
];

export default {
  title: "Components/DlBox",
  component: DlBox,
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "{ name: string; value: number }",
    },
  },
  parameters: { 
    layout: "centered",
    docs: {
      description: {
        component: [
          "Para cambiar el ancho pon `className` y defina el ancho que quieras.",
        ].join("\n\n"),
      },
    },
  },
} satisfies Meta<typeof DlBox>;

type Story = StoryObj<typeof DlBox>;

export const InNextPage: Story = {
  args: {
    title: "Example title",
    items: [
      { name: "hp", value: 20 },
      { name: "attack", value: 40 },
    ],
    className: ""
  },
};