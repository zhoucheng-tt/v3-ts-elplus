export default [
  {
    path: '/test',
    name: "Test",
    component: () => import('@/views/test/index.vue'),
    meta: {title: 'test', code: 'T000'}
  }
];
