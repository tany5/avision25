import { Injectable } from '@angular/core';
import { WebserviceService } from 'src/app/webservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreviousyearexampanelService {

  constructor(private webService: WebserviceService) { }

  getQuizInformation(quiz_id) {
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_quiz_information/${quiz_id}`, headers)
  }

  getQuizQuestionAnswers(quiz_id, question_type_id, test_taken_id) {
    let headers = new  HttpHeaders ({'Content-Type': 'application/json'})
    return this.webService.get(`get_quiz_question_previous/${quiz_id}/${question_type_id}/${test_taken_id}`, headers)
  }

  saveAnswers(test_taken_id, test_question_id, question_status, answer_id) {
    alert(answer_id)
    let headers = new  HttpHeaders ({'Content-Type': 'text/plain'})
    return this.webService.post(`save_answer_previous`, {test_taken_id, test_question_id, question_status, answer_id}, headers)
  }

  submitQuiz(test_taken_id, user_id, status,quiz_id) {
    let headers = new  HttpHeaders ({'Content-Type': 'text/plain'})
    console.log(test_taken_id, user_id)
    return this.webService.post(`submit_exam`, {test_taken_id, user_id, status,quiz_id}, headers)
  }
}
