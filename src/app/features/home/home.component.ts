import { Component, OnInit } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { ScrollTopComponent } from "../../shared/components/scroll-top/scroll-top.component";
import { SkillsComponent } from "../skills/skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, ContactComponent, ScrollTopComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  roles: string[] = [
    'Nariman',
    'Developer'
  ];

  currentText = '';
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect(){
    const currentWord = this.roles[this.textIndex];

    if(!this.isDeleting){
      this.currentText = currentWord.substring(0, this.charIndex + 1);

      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        this.isDeleting = true;

        setTimeout(()=>{
          this.typeEffect();
        }, 1500);
        return;
      }
    }else{
      this.currentText = currentWord.substring(0, this.charIndex -1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex++;

        if (this.textIndex >= this.roles.length) {
          this.textIndex = 0;
        }
      }
    }
    setTimeout(()=>{
      this.typeEffect();
    }, this.isDeleting ? 50: 100);
  }
}
