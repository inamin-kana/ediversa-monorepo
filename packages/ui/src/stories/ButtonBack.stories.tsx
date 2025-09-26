import type { Meta, StoryObj } from "@storybook/react";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";

const meta: Meta<typeof ButtonBack> = {
  component: ButtonBack,
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "Default size `min-width: 140px;`", 
          "Para cambiar el tamaño, coloque este componente dentro de `<div className={style.◯◯◯}></div>` y defina el tamaño en la clase.",
        ].join("\n\n"),
      },
    },
  },
  argTypes: {
    href: { control: "text", description: "Introduzca el enlace de la página." },
    label: { control: "text", description: "Contenido del botón." },
    target: {
      control: "inline-radio",
      options: [undefined, "_blank"],
    },
    rel: { 
      control: "text",
      description: "Atributo rel (se recomienda 'noopener' cuando se utiliza '_blank')"
    },
  },
  args: {
    href: "/",
    label: "Button",
  },
};
export default meta;

type Story = StoryObj<typeof ButtonBack>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};
