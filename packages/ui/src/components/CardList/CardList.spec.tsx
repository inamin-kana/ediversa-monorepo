import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { CardList, type ListItem } from "./CardList";

describe("<CardList />", () => {
	it("CHECK: If the number of 'items' is the same to 'li.length'", () => {
		const items: ListItem[] = [
			{ id: "1", name: "bulbasaur", href: "/pokemon/1" },
			{ id: "2", name: "ivysaur", href: "/pokemon/2" },
		];

		render(<CardList items={items} ariaLabel="Example list" />);

		const list = screen.getByRole("list", { name: "Example list" });
		const lis = within(list).getAllByRole("listitem");
		expect(lis).toHaveLength(items.length);

		items.forEach(({ name, href }) => {
			const link = within(list).getByRole("link", { name });
			expect(link).toHaveAttribute("href", href);
		});
	});

	it("CHECK: If dose not exist imageSrc, use 'getImageSrc' value", () => {
		const items: ListItem[] = [
			{ id: "25", name: "pikachu", href: "/pokemon/25" },
		];

		render(
			<CardList
				items={items}
				getImageSrc={(it) => `https://img.example/${it.id}.png`}
				getImageAlt={(it) => `Imágen de ${it.name}`}
			/>,
		);

		const list = screen.getByRole("list");
		const img = within(list).getByRole("img", { name: "Imágen de pikachu" });
		expect(img).toHaveAttribute("src", "https://img.example/25.png");
	});

	it("CHECK: If dose not exist 'getImageAlt', 'alt' will be 'name'", () => {
		const items: ListItem[] = [
			{ id: "4", name: "charmander", href: "/pokemon/4" },
		];

		render(
			<CardList items={items} getImageSrc={(it) => `/sprites/${it.id}.png`} />,
		);

		const img = screen.getByRole("img", { name: "charmander" });
		expect(img).toHaveAttribute("src", "/sprites/4.png");
	});

	it("CHECK: If dose not exist the images", () => {
		const items: ListItem[] = [
			{ id: "10", name: "caterpie", href: "/pokemon/10" },
			{ id: "11", name: "metapod", href: "/pokemon/11" },
		];

		render(<CardList items={items} />);
		expect(screen.queryByRole("img")).toBeNull();
	});

	it("CHECK: If it has 'className'", () => {
		const items: ListItem[] = [
			{ id: "1", name: "bulbasaur", href: "/pokemon/1" },
		];

		render(<CardList items={items} className="testClass" />);
		const ul = screen.getByRole("list");
		expect(ul).toHaveClass("testClass");
	});
});
