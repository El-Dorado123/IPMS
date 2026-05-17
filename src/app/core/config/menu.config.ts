import { Permission } from '../constants/permissions.constant';
import { Role } from '../constants/roles.constant';

export interface MenuItemConfig {
  label: string;
  route: string;
  icon?: string;
  children?: MenuItemConfig[];
  roles?: Role[];
  permissions?: Permission[];
}

export const menuConfig: MenuItemConfig[] = [
  { label: 'Dashboard', route: '/app/dashboard', icon: 'pi pi-home' },
  {
    label: 'Properties',
    route: '/app/property',
    icon: 'pi pi-building',
    permissions: ['property:view'],
    children: [
      { label: 'All Properties', route: '/app/property/all' },
      { label: 'Add Property', route: '/app/property/add', permissions: ['property:manage'] },
      { label: 'Floors', route: '/app/property/floors' },
      { label: 'Amenities', route: '/app/property/amenities' },
      { label: 'Property Gallery', route: '/app/property/gallery' },
    ],
  },
  {
    label: 'Rooms',
    route: '/app/rooms',
    icon: 'pi pi-th-large',
    permissions: ['room:view'],
    children: [
      { label: 'All Rooms', route: '/app/rooms/all' },
      { label: 'Beds', route: '/app/rooms/beds' },
      { label: 'Room Availability', route: '/app/rooms/availability' },
      { label: 'Room Types', route: '/app/rooms/types' },
      { label: 'Room Pricing', route: '/app/rooms/pricing' },
    ],
  },
  {
    label: 'Tenants',
    route: '/app/tenants',
    icon: 'pi pi-users',
    permissions: ['tenant:view'],
    children: [
      { label: 'All Tenants', route: '/app/tenants/all' },
      { label: 'Add Tenant', route: '/app/tenants/add', permissions: ['tenant:manage'] },
      { label: 'Check-In', route: '/app/tenants/check-in' },
      { label: 'Check-Out', route: '/app/tenants/check-out' },
      { label: 'KYC Documents', route: '/app/tenants/kyc-documents' },
      { label: 'Agreements', route: '/app/tenants/agreements' },
      { label: 'Tenant History', route: '/app/tenants/history' },
    ],
  },
  {
    label: 'Billing',
    route: '/app/billing',
    icon: 'pi pi-receipt',
    permissions: ['billing:view'],
    children: [
      { label: 'Invoices', route: '/app/billing/invoices' },
      { label: 'Payments', route: '/app/billing/payments' },
      { label: 'Due Payments', route: '/app/billing/due-payments' },
      { label: 'Security Deposits', route: '/app/billing/security-deposits' },
      { label: 'Expenses', route: '/app/billing/expenses' },
      { label: 'Penalties', route: '/app/billing/penalties' },
      { label: 'Receipts', route: '/app/billing/receipts' },
    ],
  },
  {
    label: 'Reports',
    route: '/app/reports',
    icon: 'pi pi-chart-bar',
    permissions: ['reports:view'],
    children: [
      { label: 'Occupancy Reports', route: '/app/reports/occupancy' },
      { label: 'Revenue Reports', route: '/app/reports/revenue' },
      { label: 'Expense Reports', route: '/app/reports/expenses' },
      { label: 'Tenant Reports', route: '/app/reports/tenants' },
      { label: 'Payment Reports', route: '/app/reports/payments' },
      { label: 'Profit & Loss', route: '/app/reports/profit-loss' },
      { label: 'Export Reports', route: '/app/reports/export' },
    ],
  },
  {
    label: 'Administrator',
    route: '/app/administration',
    icon: 'pi pi-shield',
    roles: ['admin', 'super-admin'],
    children: [
      { label: 'Users', route: '/app/administration/users' },
      { label: 'Roles', route: '/app/administration/roles' },
      { label: 'Permissions', route: '/app/administration/permissions' },
      { label: 'Activity Logs', route: '/app/administration/activity-logs' },
      { label: 'Access Control', route: '/app/administration/access-control' },
    ],
  },
  // {
  //   label: 'Visitors & Leads',
  //   route: '/app/visitors',
  //   icon: 'pi pi-id-card',
  //   children: [
  //     { label: 'Visitor Entry', route: '/app/visitors/entry' },
  //     { label: 'Lead Management', route: '/app/visitors/leads' },
  //     { label: 'Follow-Ups', route: '/app/visitors/follow-ups' },
  //     { label: 'Conversion Analytics', route: '/app/visitors/conversion-analytics' },
  //   ],
  // },
  // {
  //   label: 'Scanner',
  //   route: '/app/scanner',
  //   icon: 'pi pi-qrcode',
  //   children: [
  //     { label: 'QR Scanner', route: '/app/scanner/qr' },
  //     { label: 'Visitor Scanner', route: '/app/scanner/visitor' },
  //     { label: 'Share PG Details', route: '/app/scanner/share-pg-details' },
  //   ],
  // },
  // {
  //   label: 'Support',
  //   route: '/app/support',
  //   icon: 'pi pi-question-circle',
  //   children: [
  //     { label: 'Support Tickets', route: '/app/support/tickets' },
  //     { label: 'Complaints', route: '/app/support/complaints' },
  //     { label: 'Feedback', route: '/app/support/feedback' },
  //   ],
  // },
];

export const quickActionsConfig: MenuItemConfig[] = [
  { label: 'Add Property', route: '/app/property/add', icon: 'pi pi-building' },
  { label: 'Add Tenant', route: '/app/tenants/add', icon: 'pi pi-user-plus' },
  { label: 'Generate Invoice', route: '/app/billing/invoices/generate', icon: 'pi pi-receipt' },
];

export const profileMenuConfig: MenuItemConfig[] = [
  { label: 'My Profile', route: '/app/settings/profile', icon: 'pi pi-user' },
  { label: 'Change Password', route: '/app/settings/security', icon: 'pi pi-lock' },
  { label: 'Activity Logs', route: '/app/administration/activity-logs', icon: 'pi pi-history' },
  { label: 'Logout', route: '/auth/login', icon: 'pi pi-sign-out' },
];
