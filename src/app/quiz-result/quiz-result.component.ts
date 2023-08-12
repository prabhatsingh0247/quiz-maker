import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../core/services/quiz.service';
import { Answers, Option } from '../core/models/quiz-form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss'],
})
export class QuizResultComponent implements OnInit {
  subscription: Subscription = new Subscription();
  answers: Array<Answers> = [];
  isResultVisible: boolean = false;
  barColor: string = '';
  totalCount: number = 0;
  score: number = 0;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.answers = this.quizService.getQuizData();
    if (this.answers.length) {
      this.isResultVisible = true;
      this.submitAnswers();
      this.totalCount = this.answers.length;
      this.barColor = this.setBarColor(this.answers);
    }
  }

  setBarColor(answers: Array<Answers>): string {
    this.score = this.getCount(answers);
    if (this.score <= 1) {
      return 'red';
    } else if (this.score <= 3) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  getCount(answers: Array<Answers>): number {
    let correctAnswersCount: number = 0;
    answers.forEach((answer: Answers) => {
      answer.isCorrectAnswer ? correctAnswersCount++ : null;
    });
    return correctAnswersCount;
  }

  submitAnswers() {
    this.answers.forEach((answer: Answers) => {
      answer.isCorrectAnswer = this.isCorrectAnswer(
        answer.correct_answer,
        answer.selected ?? ''
      );
      if (!answer.isCorrectAnswer) {
        answer.options?.forEach((option: Option) => {
          answer.correct_answer == option.label
            ? (option.isChecked = true)
            : null;
          answer.selected == option.label
            ? (option.isIncorrectAnswer = true)
            : null;
        });
      }
    });
    console.log(this.answers);
  }

  isCorrectAnswer(correctAnswer: string, selctedAnswer: string): boolean {
    return correctAnswer.toLowerCase() === selctedAnswer.toLowerCase();
  }

  createNewQuiz() {
    this.router.navigate(['form']);
  }
}
