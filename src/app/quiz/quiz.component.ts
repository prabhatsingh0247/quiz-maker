import { Component, Input, ViewChild } from '@angular/core';
import { Answers, Option } from '../core/models/quiz-form.interface';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() answers: Array<Answers> = [];
  @Input() isAnswers: boolean = false;
  @Input() isResult: boolean = false;
  @ViewChild('quizForm', { static: true }) public quizForm!: NgForm;

  select(index: number, options: Array<Option> = []) {
    options.map((option: Option) => (option.isChecked = false));
    options[index].isChecked = true;
  }
}
