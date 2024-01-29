export default [
  {
    path: '/verify-code',
    name: "VerifyCode",
    component: () => import('@/views/verify-code/index.vue'),
    meta: {title: '验证码', code: 'T005'}
  },
];
