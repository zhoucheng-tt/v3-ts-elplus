export default [
  {
    path: '/test',
    name: "test",
    component: () => import('@/views/test/index.vue'),
    meta: {title: 'test', code: 'T0000'}
  }
];
