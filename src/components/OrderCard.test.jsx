import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OrderCard from './OrderCard';

describe('OrderCard', () => {
  it('renders the card title', () => {
    render(<OrderCard />);
    expect(screen.getByText(/Your Order is Completed!/i)).toBeInTheDocument();
  });

  it('renders the price', () => {
    render(<OrderCard />);
    expect(screen.getByText('$15')).toBeInTheDocument();
  });

  it('renders the quantity', () => {
    render(<OrderCard />);
    expect(screen.getByText('Quantity:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders the edit button', () => {
    render(<OrderCard />);
    expect(screen.getByText('Edit Your Order')).toBeInTheDocument();
  });

  it('renders the countdown timer', () => {
    render(<OrderCard />);
    expect(screen.getByText(/to edit/i)).toBeInTheDocument();
  });
});
