import { Routes } from '@angular/router';
import {Permission} from '../interfaces/permission'
import { AdminPermissons } from '../service/admin-permissions';
export const content: Routes = [
  {
    path: 'dashboard',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'shops',
    loadChildren: () => import('../../components/shops/shops.module').then(m => m.ShopsModule),
    data: {
      breadcrumb: "Products",
    }
  },
  {
    path: 'routes',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/routes/routes.module').then(m => m.RoutesModule),
    data: {
      breadcrumb: "Routes"
    }
  },
  {
    path: 'coupons',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/coupons/coupons.module').then(m => m.CouponsModule),
    data: {
      breadcrumb: "Coupons"
    }
  },
  {
    path: 'import',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/import-routes/import-routes.module').then(m => m.ImportRoutesModule),
    data: {
      breadcrumb: "Import"
    }
  },
  {
    path: 'pages',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: "Pages"
    }
  },
  {
    path: 'delivery',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/delivery/delivery.module').then(m => m.DeliveryModule),
    data: {
      breadcrumb: "Pages"
    }
  },
  {
    path: 'media',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/media/media.module').then(m => m.MediaModule),
  },
  {
    path: 'companies',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/companies/companies.module').then(m => m.CompaniesModule),
  },
  {
    path: 'menus',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/menus/menus.module').then(m => m.MenusModule),
    data: {
      breadcrumb: "Menus"
    }
  },
  {
    path: 'users',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'vendors',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/vendors/vendors.module').then(m => m.VendorsModule),
    data: {
      breadcrumb: "Vendors"
    }
  },
  {
    path: 'localization',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/localization/localization.module').then(m => m.LocalizationModule),
    data: {
      breadcrumb: "Localization"
    }
  },
  {
    path: 'reports',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/reports/reports.module').then(m => m.ReportsModule),
  },
  {
    path: 'settings',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/setting/setting.module').then(m => m.SettingModule),
    data: {
      breadcrumb: "Settings"
    }
  },
  {
    path: 'invoice',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../components/invoice/invoice.module').then(m => m.InvoiceModule),
    data: {
      breadcrumb: "Invoice"
    }
  },
  {
    path: 'chat',
    canActivate:[AdminPermissons],
    loadChildren: () => import('../../chat/chat.module').then(m => m.ChatModule),
    data: {
      breadcrumb: "chat"
    }
  }
];