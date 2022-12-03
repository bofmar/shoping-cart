import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('the page header', () => {
  describe('the navigation section', () => {
    it('renders the links', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const homeLink = screen.getByRole('link', { name: /home/i })
      const shopLink = screen.getByRole('link', { name: /shop/i })
      const aboutLink = screen.getByRole('link', { name: /about/i })

      expect(homeLink).toBeInTheDocument();
      expect(shopLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
    });
  });
});
