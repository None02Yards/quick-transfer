import { Routes } from '@angular/router';

import { MobileLayout } from './layouts/mobile-layout/mobile-layout';

import { Home } from './features/home/home';

// Accounts
import { AccountsList } from './features/accounts/accounts-list/accounts-list';
import { AccountDetails } from './features/accounts/account-details/account-details';
import { AccountStatement } from './features/accounts/account-statement/account-statement';
import { AccountSettings } from './features/accounts/account-settings/account-settings';

// Transfers
import { TransferHome } from './features/transfers/transfer-home/transfer-home';
import { SendMoney } from './features/transfers/send-money/send-money';
import { Beneficiaries } from './features/transfers/beneficiaries/beneficiaries';
import { AddBeneficiary } from './features/transfers/add-beneficiary/add-beneficiary';
import { TransferSuccess } from './features/transfers/transfer-success/transfer-success';

// Payments
import { BillPayment } from './features/payments/bill-payment/bill-payment';
import { MobileRecharge } from './features/payments/mobile-recharge/mobile-recharge';
import { Utilities } from './features/payments/utilities/utilities';
import { Internet } from './features/payments/internet/internet';
import { PaymentSuccess } from './features/payments/payment-success/payment-success';

export const routes: Routes = [
  {
    path: '',
    component: MobileLayout,
    children: [
      {
        path: '',
        component: Home
      },

      // Accounts
      {
        path: 'accounts',
        component: AccountsList
      },
      {
        path: 'accounts/details',
        component: AccountDetails
      },
      {
        path: 'accounts/statement',
        component: AccountStatement
      },
      {
        path: 'accounts/settings',
        component: AccountSettings
      },

      // Transfers
      {
        path: 'transfers',
        component: TransferHome
      },
      {
        path: 'transfers/send-money',
        component: SendMoney
      },
      {
        path: 'transfers/beneficiaries',
        component: Beneficiaries
      },
      {
        path: 'transfers/add-beneficiary',
        component: AddBeneficiary
      },
      {
        path: 'transfers/success',
        component: TransferSuccess
      },

      // Payments
      {
        path: 'payments',
        component: BillPayment
      },
      {
        path: 'payments/mobile-recharge',
        component: MobileRecharge
      },
      {
        path: 'payments/utilities',
        component: Utilities
      },
      {
        path: 'payments/internet',
        component: Internet
      },
      {
        path: 'payments/success',
        component: PaymentSuccess
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];