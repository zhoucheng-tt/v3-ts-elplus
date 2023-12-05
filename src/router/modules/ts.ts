export default [
  {
    path: '/ts',
    name: "Ts",
    component: () => import('@/views/ts/index.vue'),
    meta: {title: 'ts', code: 'T0002'}
  },
  {
    path: '/ts-effect',
    name: "TsEffect",
    component: () => import('@/views/ts/ts-effect/index.vue'),
    meta: {title: 'ts-effect', code: 'T00021'}
  },
];
