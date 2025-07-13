// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Core Skills',
      items: [
        'web',
        'git',
        'testing',
      ],
    },
    {
      type: 'category',
      label: 'Deployment & Production',
      items: [
        'containerization',
        'ci-cd',
        'observability',
      ],
    },
    {
      type: 'category',
      label: 'Learn by Doing',
      items: [
        'open-source',
      ],
    },
    {
      type: 'category',
      label: "Learn from Others",
      items: [
        'mentorship',
        'global-communities',
      ],
    }
  ],
};

export default sidebars;
