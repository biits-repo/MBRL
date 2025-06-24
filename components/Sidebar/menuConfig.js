export const menuGroups = [
  {
    title: null,
    items: [
      { icon: '/dashboardMenuIcon.svg', label: 'Dashboard', to: '/home' },
      { icon: '/libraryMenuIcon.svg', label: 'Library', to: '/library' },
      { icon: '/analyticsMenuIcon.svg', label: 'Analytics', to: '/analytics' },
      { icon: '/userMenuIcon.svg', label: 'Users', to: '/users' }
    ]
  },
  {
    title: 'Account Pages',
    items: [
      { icon: '/ProfileMenuIcon.svg', label: 'Profile', to: '/profile' },
      { icon: '/logoutMenuIcon.svg', label: 'Log Out', to: '#', isLogout: false }
    ]
  }
];
