import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-results',
  standalone: true,
  imports: [],
  templateUrl: './quiz-results.component.html',
  styleUrl: './quiz-results.component.scss',
})
export class QuizResultsComponent {
  @Input() answer = '';
}
