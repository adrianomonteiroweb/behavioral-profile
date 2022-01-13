import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Main screen Tests.', () => {
  test('Tests if there is an h1 with a following title:', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', {
      name: /Perfil Comportamental/i,
      level: 1
    })).toBeInTheDocument();
  });

  test('Tests if there is an h1 with a following title:', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/Ordene de 1 à 3, quanto para você dá de importância as seguintes setenças:/i)).toBeInTheDocument();
  });
});
