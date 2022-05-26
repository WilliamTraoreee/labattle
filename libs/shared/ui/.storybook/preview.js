import '../src/lib/styles/main.scss'
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1E1F23'
      }
    ]
  },
}

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
