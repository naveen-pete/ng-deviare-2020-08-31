import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Core
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Auth
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

// Products
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { MessageComponent } from './message/message.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // http://localhost:4200
  {
    path: 'products', component: ProductsComponent, children: [
      { path: '', component: MessageComponent },
      { path: 'new', component: ProductFormComponent }, // http://localhost:4200/products/new
      { path: ':id', component: ProductDetailComponent }, // http://localhost:4200/products/1
      { path: ':id/edit', component: ProductFormComponent } // http://localhost:4200/products/1/edit
    ]
  }, // http://localhost:4200/products
  { path: 'login', component: LoginComponent }, // http://localhost:4200/login
  { path: 'signup', component: SignUpComponent }, // http://localhost:4200/signup
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ProductListComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
