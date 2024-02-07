import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import quiz_questions from '../../../assets/data/quiz_questions.json';

import { QuizLogoComponent } from '../quiz-logo/quiz-logo.component';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';
import { QuizResultsComponent } from '../quiz-results/quiz-results.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    QuizLogoComponent,
    QuizQuestionsComponent,
    QuizResultsComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  title = quiz_questions.title;
  questions = quiz_questions.questions;
  questionSelected = this.questions[0];
  questionIndex = 0;
  questionMaxIndex = this.questions.length;
  answers: string[] = [];
  answer = '';
  finished = false;

  playerChoice(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer = await this.checkResults(this.answers);
      this.finished = true;
      this.answer =
        quiz_questions.results[
          finalAnswer as keyof typeof quiz_questions.results
        ];
    }
  }

  async checkResults(answers: string[]) {
    const result = answers.reduce((previous, current, index, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });
    return result;
  }
}
