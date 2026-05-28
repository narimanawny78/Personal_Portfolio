import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark: boolean = false;

  constructor() {
    const savedItem =  localStorage.getItem('theme');

    if(savedItem === 'dark'){
      this.isDark = true;
      document.body.classList.add('dark');
    }
  }

  toggleTheme(){
    this.isDark = !this.isDark;
    if(this.isDark){
      document.body.classList.add('dark');
      localStorage.setItem('theme','dark');
    }else{
      document.body.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
  }
}
