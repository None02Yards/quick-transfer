import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-grid',
  imports: [RouterLink],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.scss',
})
export class ServicesGrid {

  services = [
    {
      title: 'Send Money',
      icon: 'north_east',
      route: '/transfers/send-money'
    },
    {
      title: 'Collect Money',
      icon: 'south_west',
      route: '/transfers'
    },
    {
      title: 'Bill Payment',
      icon: 'receipt_long',
      route: '/payments'
    },
    {
      title: 'Donations',
      icon: 'volunteer_activism',
      route: '/payments'
    },
    {
      title: 'Manage Accounts',
      icon: 'account_balance',
      route: '/accounts'
    },
    {
      title: 'Transaction History',
      icon: 'compare_arrows',
      route: '/accounts/statement'
    }
  ];

}