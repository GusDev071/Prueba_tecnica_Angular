import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'coupons', component: CouponsComponent},
    {path: 'carousel', component: CarouselComponent}
];
