import { render } from '@testing-library/react';
import ButtonLink, { ButtonLinkProps } from './button-link';

let props: ButtonLinkProps;

describe('ButtonLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonLink {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
