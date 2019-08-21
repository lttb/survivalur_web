import MainPage from 'src/pages/Main';

export default {
  '/': { component: MainPage, exact: true },
  '/test1': { component: MainPage },
  '/test2': { component: MainPage },
};
