import { ComponentType } from 'react';
import { RouteComponentProps } from '@reach/router';

import { Label } from 'components/i18n';

import InvoicingPage404 from './InvoicingPage404';
import InvoicingPageCreateInvoice from './InvoicingPageCreateInvoice';
import InvoicingPageInvoiceList from './InvoicingPageInvoiceList';

interface PageRoute {
  Component: ComponentType<RouteComponentProps>;
  defaultRoute?: boolean;
  navMenuLabel?: Label;
  navMenuLinkPath?: string;
  routingPath: string;
}

const pageRoutes: PageRoute[] = [
  {
    Component: InvoicingPage404,
    defaultRoute: true,
    routingPath: '404',
  },
  {
    Component: InvoicingPageInvoiceList,
    navMenuLabel: 'invoicing/invoices',
    navMenuLinkPath: '.',
    routingPath: '/',
  },
  {
    Component: InvoicingPageCreateInvoice,
    navMenuLabel: 'invoicing/create invoice',
    navMenuLinkPath: 'create',
    routingPath: 'create',
  },
];

export default pageRoutes;
