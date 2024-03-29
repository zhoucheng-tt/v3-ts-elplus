export interface SideRoute {
  code: string,
  title: string,
  path?: string,
  defaultIcon: string,
  activeIcon: string,
  children?: any
}

//头部导航路由
export const routesSide: Array<SideRoute> = [
  {
    code: 'T000',
    title: 'test',
    path: '/test',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
  },
  {
    code: 'T0001',
    title: 'Css',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
    children: [
      {
        code: 'T0011',
        title: 'Css效果',
        path: '/css-effect',
        defaultIcon: 'default.svg',
        activeIcon: 'active.svg',
      }
    ],
  },
  {
    code: 'T0002',
    title: 'Ts',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
    children: [
      {
        code: 'T0021',
        title: 'Ts效果',
        path: '/ts-effect',
        defaultIcon: 'default.svg',
        activeIcon: 'active.svg',
      },
      {
        code: 'T0022',
        title: 'common',
        path: '/ts-common',
        defaultIcon: 'default.svg',
        activeIcon: 'active.svg',
      }
    ],
  },
  {
    code: 'T003',
    title: 'ElePlus',
    path: '/ele-plus',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
  },
  {
    code: 'T004',
    title: 'ECharts',
    path: '/e-charts',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
  },
  {
    code: 'T005',
    title: '验证码',
    path: '/verify-code',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
  },
]
