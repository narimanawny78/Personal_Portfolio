import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  aboutText = `
    I’m Nariman Awny, a passionate Front-End Developer
    with a strong foundation in web technologies.
    I graduated in 2024 from the Modern Academy for
    Computer Science and Information.

    During college, I gained experience in volunteering work,
    enhancing my teamwork and leadership skills.

    I joined the ITI intensive coding program to deepen my
    backend knowledge and improve my full-stack skills.

    My technical skills include Angular, JavaScript,
    TypeScript, HTML, CSS, SQL, MySQL, Java, and C++.
  `;

}
