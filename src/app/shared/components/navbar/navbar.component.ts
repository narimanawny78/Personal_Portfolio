import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor( public themeService : ThemeService ){}
  //state for the mobile
  isMenuOpen = false;

  navLinks = [
    'Home',
    'About',
    'Projects',
    'Contact'
  ];

  //Opens and closed the mobile menu
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
