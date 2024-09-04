import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/modules/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: [],
  providers: [],
})
export class AuthModule {}
