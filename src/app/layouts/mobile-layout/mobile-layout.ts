import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../../shared/components/header/header';
import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-mobile-layout',
  imports: [
    RouterOutlet,
    Header,
    BottomNav
  ],
  templateUrl: './mobile-layout.html',
  styleUrl: './mobile-layout.scss',
})
export class MobileLayout {

}