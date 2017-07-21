import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, ControlContainer } from '@angular/forms';

import { SortPipe } from './sort.array';
import { AppComponent } from './app.component';
import { PostalAddressService } from './postal-address.service';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    ProductComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot ([
    {
      path: 'member',
      component: MemberComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    ])
  ],
  providers: [PostalAddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
