import requireContext from 'require-context.macro';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
const req = requireContext('../src/stories', true, /\.stories\.(js|mdx)$/);
function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}

addDecorator(withInfo);
configure(loadStories, module);
