import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'React Sortable Tree',
    brandUrl: 'https://smartdigitpt.github.io/react-sortable-tree',
    gridCellSize: 12,
  }),
});
