import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-users-profile',
  templateUrl: './edit-users-profile.component.html',
  styleUrls: ['./edit-users-profile.component.scss'],
  imports: [CommonModule , RouterModule],
  standalone: true,
})
export class EditUsersProfileComponent {

}
