import { render } from '@testing-library/react';

import TagStatus from './tag-status';

describe('TagStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TagStatus />);
    expect(baseElement).toBeTruthy();
  });
});
