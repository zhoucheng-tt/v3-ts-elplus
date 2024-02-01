export default [
  {
    path: '/ts-effect',
    name: "TsEffect",
    component: () => import('@/views/ts/ts-effect/index.vue'),
    meta: {title: 'ts-effect', code: 'T0021'}
  },
  {
    path: '/ts-common',
    name: "TsCommon",
    component: () => import('@/views/ts/ts-common/index.vue'),
    meta: {title: 'ts-effect', code: 'T0022'}
  },
];
