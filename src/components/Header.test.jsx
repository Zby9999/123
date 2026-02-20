import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('How it Works').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Resources').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the Install Customizer button', () => {
    render(<Header />);
    expect(screen.getAllByText('Install Customizer').length).toBeGreaterThanOrEqual(1);
  });
});
