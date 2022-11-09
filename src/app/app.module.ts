import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// mateial components
import {MatToolbarModule}         from '@angular/material/toolbar';
import {MatIconModule}            from '@angular/material/icon';
import {MatButtonModule}          from '@angular/material/button';
import {MatSidenavModule}         from '@angular/material/sidenav';
import {MatTooltipModule}         from '@angular/material/tooltip';
import {MatCardModule}            from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule}       from '@angular/material/form-field';
import {MatSelectModule}          from '@angular/material/select';
import {MatBadgeModule}           from '@angular/material/badge';
import {MatInputModule}           from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// Components
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartProductComponent } from './Components/cart/cart-product/cart-product.component';
import { OrderConfirmationComponent } from './Components/cart/order-confirmation/order-confirmation.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    CartComponent,
    CartProductComponent,
    OrderConfirmationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // flexLayout
    FlexLayoutModule,
    // material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
