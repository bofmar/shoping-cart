import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { testItem } from './testData';

describe('item component', () => {
  it('can receive an item object and render it on the screen', () => {
    render(
      <BrowserRouter>
        <ItemCard {...testItem} />
      </BrowserRouter>
    );

    const image = screen.getByRole('img', { name: /test guitar/i });
    const name = screen.getByRole('heading', { name: /test guitar/i });
    const price = screen.getByRole('heading', { name: /200/i });


    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
