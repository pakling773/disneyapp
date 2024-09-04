import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-subscription',
  templateUrl: './account-subscription.component.html',
  styleUrls: ['./account-subscription.component.scss'],
  imports: [CommonModule , RouterModule],
  standalone: true,
})
export class AccountSubscriptionComponent {}
