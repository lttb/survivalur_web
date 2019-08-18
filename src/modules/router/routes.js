import Template from 'src/pages/Template';

export default {
  '/': { component: Template, exact: true },
  '/test1': { component: Template },
  '/test2': { component: Template },
};
