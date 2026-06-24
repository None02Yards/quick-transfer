import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-account-statement',
  imports: [CommonModule],
  templateUrl: './account-statement.html',
  styleUrl: './account-statement.scss',
})
export class AccountStatement {

  constructor(
    private location: Location
  ) {}

  accountNumber =
    'XXXXXXXXXXXXXXXXXXXX4319';

  accountType =
    'SAVING';

  currentDate =
    '2026-06-24 16:18:29 PM';

transactions = [

  {
    date: '10-06-2026',
    remarks: 'MONTHLY DEPOSIT',
    amount: '+8,745.013 EGP'
  },

  {
    date: '10-05-2026',
    remarks: 'MONTHLY DEPOSIT',
    amount: '+8,745.013 EGP'
  },

  {
    date: '10-04-2026',
    remarks: 'MONTHLY DEPOSIT',
    amount: '+8,745.013 EGP'
  },

  {
    date: '10-03-2026',
    remarks: 'MONTHLY DEPOSIT',
    amount: '+8,745.013 EGP'
  },

  {
    date: '10-02-2026',
    remarks: 'MONTHLY DEPOSIT',
    amount: '+8,745.013 EGP'
  },

  {
    date: '10-01-2026',
    remarks: 'MONTHLY DEPOSIT',
    amount: '+8,745.013 EGP'
  }

];

  goBack(): void {

    this.location.back();

  }

}