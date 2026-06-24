import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-details',
  imports: [],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss',
})
export class AccountDetails {

  accountNumber = 'XXXXXXXXXXXXXXXXXXXX4319';

  accountType = 'SAVING';

  availableBalance = '251,820.39 EGP';

  constructor(
    private location: Location
  ) {}

  goBack(): void {

    this.location.back();

  }

}