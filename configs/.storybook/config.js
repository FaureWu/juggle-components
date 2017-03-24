import { configure } from '@kadira/storybook';

const req = require.context('../../src/components', true, /story.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);
