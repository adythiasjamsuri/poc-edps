export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [

  // CREATION
  {
    title: true,
    name: 'General'
  },
  {
    name: 'Disposal Request',
    url: '/disposal-requests',
    icon: 'icon-plus',
    children: [
      {
        name: 'With PDR',
        url: '/disposal-requests/create',
        icon: 'icon-circle',
      },
      {
        name: 'Without PDR',
        url: '/disposal-requests/create',
        icon: 'icon-circle',
      }
    ]
  },
  {
    name: 'Delivery Notes',
    url: '/theme/typography',
    icon: 'icon-plus'
  },
  {
    name: 'Invoice Request',
    url: '/theme/typography',
    icon: 'icon-plus'
  },
  {
    name: 'Search Document',
    url: '/theme/typography',
    icon: 'icon-plus'
  },

  // APPROVAL
  {
    title: true,
    name: 'Approval'
  },
  {
    name: 'My Approval',
    url: '/theme/typography',
    icon: 'icon-check'
  },
  {
    name: 'Delegation',
    url: '/theme/typography',
    icon: 'icon-share'
  },

  // MASTER DATA
  {
    title: true,
    name: 'Master'
  },
  {
    name: 'Master Data',
    url: '/buttons/buttons',
    icon: 'icon-cursor'
  },

  // REPORTS
  {
    title: true,
    name: 'Reports'
  },
  {
    name: 'Disposal Report',
    url: '/buttons/buttons',
    icon: 'icon-docs'
  },
  {
    name: 'Disposal Status',
    url: '/buttons/buttons',
    icon: 'icon-docs'
  }
];
