import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './UI/buttons/buttons.component';
import { CountInputComponent } from './UI/count-input/count-input.component';
import { TextInputComponent } from './UI/inputs/text-input/text-input.component';
import { RadioInputComponent } from './UI/inputs/radio-input/radio-input.component';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeatureBannerComponent } from './home/feature-banner/feature-banner.component';
import { ProductGroupLinkComponent } from './shared/product-group-link/product-group-link.component';
import { FeaturedProductMainComponent } from './home/featured-product-main/featured-product-main.component';
import { FeatureFullComponent } from './home/feature-full/feature-full.component';
import { FeaturePartComponent } from './home/feature-part/feature-part.component';
import { BottomBannerComponent } from './shared/bottom-banner/bottom-banner.component';
import { CategoryComponent } from './category/category.component';
import { CategoryHeaderComponent } from './category/category-header/category-header.component';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { ProductService } from './shared/product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { GalleryComponent } from './product-detail/gallery/gallery.component';
import { MightLikeComponent } from './product-detail/might-like/might-like.component';
import { RouterModule } from '@angular/router';
import { MightLikeCardComponent } from './product-detail/might-like/might-like-card/might-like-card.component';
import { CartPopupComponent } from './shared/cart-popup/cart-popup.component';
import { CartPopupItemComponent } from './shared/cart-popup/cart-popup-item/cart-popup-item.component';
import { CartService } from './shared/cartHandler.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutPopupComponent } from './checkout/checkout-popup/checkout-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    CountInputComponent,
    TextInputComponent,
    RadioInputComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeatureBannerComponent,
    ProductGroupLinkComponent,
    FeaturedProductMainComponent,
    FeatureFullComponent,
    FeaturePartComponent,
    BottomBannerComponent,
    CategoryComponent,
    CategoryHeaderComponent,
    CategoryItemComponent,
    ProductDetailComponent,
    GalleryComponent,
    MightLikeComponent,
    MightLikeCardComponent,
    CartPopupComponent,
    CartPopupItemComponent,
    CheckoutComponent,
    CheckoutPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'category',
        component: CategoryComponent,
      },
      { path: 'productDetail', component: ProductDetailComponent },
      { path: 'productDetail1', component: ProductDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
    ]),
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
