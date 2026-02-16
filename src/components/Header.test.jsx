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
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('How it Works')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders the Install Customizer button', () => {
    render(<Header />);
    expect(screen.getByText('Install Customizer')).toBeInTheDocument();
  });
});
