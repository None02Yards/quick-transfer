import { Component } from '@angular/core';
import { BannerCarousel } from '../banner-carousel/banner-carousel';

@Component({
  selector: 'app-dashboard-hero',
  imports: [BannerCarousel],
  templateUrl: './dashboard-hero.html',
  styleUrl: './dashboard-hero.scss',
})
export class DashboardHero {

}