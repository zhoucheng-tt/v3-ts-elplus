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
    code: 'T0001',
    title: 'Css效果',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
    children: [
      {
        code: 'T0011',
        title: 'Css 效果',
        path: '/css-effect',
        defaultIcon: 'default.svg',
        activeIcon: 'active.svg',
      }
    ],
  },
  {
    code: 'T0002',
    title: 'Ts 效果',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
    children: [
      {
        code: 'T0021',
        title: 'Ts 效果',
        path: '/ts-effect',
        defaultIcon: 'default.svg',
        activeIcon: 'active.svg',
      }
    ],
  },
  {
    code: 'T000',
    title: 'test',
    path: '/test',
    defaultIcon: 'default.svg',
    activeIcon: 'active.svg',
  },
]
