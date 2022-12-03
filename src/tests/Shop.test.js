import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Shop from '../components/Shop';

describe('the shop page', () => {
  describe('the sidebar section', () => {
    it('renders the links', () => {
      render(
        <BrowserRouter>
          <Shop />
        </BrowserRouter>
      );

      const guitarsLink = screen.getByRole('link', { name: /guitars/i })
      const ampsLink = screen.getByRole('link', { name: /amplifiers/i })
      const pedalLink = screen.getByRole('link', { name: /pedals\/effects/i })
      const accessoriesLink = screen.getByRole('link', { name: /accessories/i })

      expect(guitarsLink).toBeInTheDocument();
      expect(ampsLink).toBeInTheDocument();
      expect(pedalLink).toBeInTheDocument();
      expect(accessoriesLink).toBeInTheDocument();
    });
  });
});
