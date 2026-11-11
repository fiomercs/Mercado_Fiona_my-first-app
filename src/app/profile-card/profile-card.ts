import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a student learning to build modern web applications with Angular. I enjoy experimenting with new ideas, discovering how things work, and learning through hands-on projects. Outside of coding, I like exploring new things and challenging myself to improve. I believe that learning is a continuous process, and I am always excited to gain new experiences and grow along the way.';
}
