import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Items from '../components/Items';
import { testItems } from './testData';

describe('items component', () => {
  it('renders all received elements', () => {
    render(
      <BrowserRouter>
        <Items itemsList={testItems.guitars} />
      </BrowserRouter>
    );

    const imageElementOne = screen.getByRole('img', { name: /test guitar/i });
    const imageElementTwo = screen.getByRole('img', { name: /another guitar/i });

    expect(imageElementOne).toBeInTheDocument();
    expect(imageElementTwo).toBeInTheDocument();
  });
});
