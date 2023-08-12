import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizService } from './core/services/quiz.service';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizFormComponent,
    QuizQuestionsComponent,
    QuizResultComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
