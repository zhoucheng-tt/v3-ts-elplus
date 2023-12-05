export default [
  {
    path: '/css',
    name: "Css",
    component: () => import('@/views/css/index.vue'),
    meta: {title: 'css', code: 'T0001'}
  },
  {
    path: '/css-effect',
    name: "CssEffect",
    component: () => import('@/views/css/css-effect/index.vue'),
    meta: {title: 'css-effect', code: 'T00011'}
  },
];
