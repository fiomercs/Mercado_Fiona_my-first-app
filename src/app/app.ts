import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Fiona Veronica A. Mercado';
  location = 'City of San Fernando, Pampanga';
  email = 'fionavmercado@gmail.com';
  phone = '0968 372 3825';

  profile = 'Hey there! I am a student interested in web development. I enjoy learning new technologies, exploring different tools, and building useful applications. I am passionate about improving my skills and creating simple, functional, and user-friendly web experiences.';

skills = [
  {
    category: 'UI/UX & Design',
    items: [
      'UI/UX Design',
      'Wireframing',
      'Prototyping',
      'Web Design',
      'Figma',
      'Canva'
    ]
  },
  {
    category: 'Frontend Development',
    items: [
      'HTML and CSS',
      'JavaScript',
      'Angular',
      'Responsive Web Design'
    ]
  },
  {
    category: 'Backend Development',
    items: [
      'Node.js',
      'REST API',
      'MySQL',
      'Python',
      'Java'
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      'Git',
      'GitHub',
      'Visual Studio Code'
    ]
  }
];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
