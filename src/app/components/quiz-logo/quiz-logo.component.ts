import { Component, Input } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-quiz-logo',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './quiz-logo.component.html',
  styleUrl: './quiz-logo.component.scss',
})
export class QuizLogoComponent {
  @Input() image = '';
  @Input() alt = '';
  @Input() width = '';
  @Input() height = '';
  @Input() title = '';
}
