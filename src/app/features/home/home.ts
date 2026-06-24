import { Component } from '@angular/core';

import { DashboardHero } from '../../shared/components/dashboard-hero/dashboard-hero';
import { AccountCard } from '../../shared/components/account-card/account-card';
import { ServicesGrid } from '../../shared/components/services-grid/services-grid';
import { RecentTransactions } from '../../shared/components/recent-transactions/recent-transactions';

@Component({
  selector: 'app-home',
  imports: [
  DashboardHero,
  AccountCard,
  ServicesGrid,
  RecentTransactions
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}