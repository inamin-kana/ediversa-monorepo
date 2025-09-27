import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { DlBox } from "./DlBox";

describe("<DlBox />", () => {
  it("CHECK: If h2 title show correctly", () => {
    render(<DlBox title="Example title" items={[{ name: "hp", value: 45 }]} />);
    expect(screen.getByRole("heading", { level: 2, name: "Example title" })).toBeInTheDocument();
  });

  it("CHECK: If 'name' and 'value' of 'items' shows in order (duplication ok)", () => {
    const items = [
      { name: "hp",      value: 10 },
      { name: "attack",  value: 20 },
      { name: "defense", value: 20 },
    ];

    const { container } = render(<DlBox title="Example title" items={items} />);
    const dl = container.querySelector("dl");
    expect(dl).toBeInTheDocument();

    const terms = within(dl!).getAllByRole("term").map((el) => el.textContent?.trim());
    const defs  = within(dl!).getAllByRole("definition").map((el) => el.textContent?.trim());

    expect(terms).toEqual(items.map((i) => i.name));
    expect(defs).toEqual(items.map((i) => String(i.value)));
  });

  it("CHECK: If reflected the className", () => {
    const { container } = render(
      <DlBox title="Example title" items={[{ name: "hp", value: 45 }]} className="testClass" />
    );
    const root = container.firstElementChild as HTMLElement | null;
    expect(root).not.toBeNull();
    expect(root!).toHaveClass("testClass");
  });
});
