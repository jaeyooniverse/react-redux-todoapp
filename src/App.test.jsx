import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  it('renders App', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('App');
  });
});
