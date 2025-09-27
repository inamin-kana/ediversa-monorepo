import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ButtonBack } from './ButtonBack';

describe('<ButtonBack />', () => {
  it('CHECK: Show link tag, label and href', () => {
    render(<ButtonBack href="/pokemon" label="Volver" />);
    const link = screen.getByRole('link', { name: 'Button Volver' });
    expect(link).toHaveAttribute('href', '/pokemon');
    expect(link).toHaveTextContent('Volver');
  });

  it('CHECK: Make automatically aria-label from label', () => {
    render(<ButtonBack href="/home" label="Ver más" />);
    const link = screen.getByRole('link', { name: 'Button Ver más' });
    expect(link).toBeInTheDocument();
  });

  it('CHECK: If shows when add props（target, rel, etc.）', () => {
    render(<ButtonBack href="/" label="Ver más detalles" target="_blank" rel="noopener" />);
    const link = screen.getByRole('link', { name: 'Button Ver más detalles' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });
});
