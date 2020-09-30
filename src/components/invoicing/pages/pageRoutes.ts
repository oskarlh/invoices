import { ComponentType } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

import { Label } from 'components/i18n';

import InvoicingPage404 from './InvoicingPage404';
import InvoicingPageCreateInvoice from './InvoicingPageCreateInvoice';
import InvoicingPageEditInvoice from './InvoicingPageEditInvoice';
import InvoicingPageInvoiceList from './InvoicingPageInvoiceList';

interface PageRoute {
  Component: ComponentType<RouteComponentProps>;
  defaultRoute?: boolean;
  navMenuLabel?: Label;
  navMenuLinkPath?: string;
  routingPath: string;
}

export const pageRoutes: readonly PageRoute[] = [
  {
    Component: InvoicingPage404,
    defaultRoute: true,
    routingPath: '404',
  },
  {
    Component: InvoicingPageInvoiceList,
    navMenuLabel: 'invoicing/invoices',
    navMenuLinkPath: '/',
    routingPath: '/',
  },
  {
    Component: InvoicingPageCreateInvoice,
    navMenuLabel: 'invoicing/create invoice',
    navMenuLinkPath: '/create',
    routingPath: '/create',
  },
  {
    Component: InvoicingPageEditInvoice,
    routingPath: '/edit/:invoiceId',
  },
];

export const rootPathPrefix = '/invoices';

export function navigateTo(to: string) {
  navigate(to.startsWith('/') ? rootPathPrefix + to : to);
}
