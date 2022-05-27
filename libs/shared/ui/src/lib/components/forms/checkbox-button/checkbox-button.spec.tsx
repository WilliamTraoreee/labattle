import { render } from '@testing-library/react';

import CheckboxButton from './checkbox-button';

describe('CheckboxButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckboxButton />);
    expect(baseElement).toBeTruthy();
  });
});
