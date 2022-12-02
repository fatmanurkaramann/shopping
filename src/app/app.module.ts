import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { OrderComponent } from './components/order/order.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BasketIconComponent } from './components/basket-icon/basket-icon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddBasketComponent } from './components/basket/add-basket/add-basket.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { OrderDetailComponent } from './components/order/order-detail/order-detail/order-detail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { ProfilComponent } from './components/profil/profil.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    BasketComponent,
    PaymentComponent,
    ProductAddComponent,
    OrderComponent,
    LayoutsComponent,
    FooterComponent,
    NotFoundComponent,
    ProductUpdateComponent,
    FilterProductPipe,
    LoginComponent,
    HeaderComponent,
    BasketIconComponent,
    ProductDeleteComponent,
    AddBasketComponent,
    OrderDetailComponent,
    SubmenuComponent,
    ProfilComponent,
  ],
  imports: [
    MatExpansionModule,
    ModalModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    BsModalService,
    { provide: 'apiUrl', useValue: 'https://webapi.angulareducation.com/api/' },
    { provide: 'validError', useValue: 'Zorunlu alanları doldurun' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi:true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
