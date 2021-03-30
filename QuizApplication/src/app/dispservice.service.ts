import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { QAC } from './disp';
import { Choice } from './Choice';


@Injectable({
  providedIn: 'root'
})
export class DispserviceService {

  constructor(public http:HttpClient) { }
  loadQuestionsData():Observable<QAC[]>{
    return this.http.get<QAC[]>("assets/questions.json");
    
}
loadData():Observable<Choice[]>{
  return this.http.get<Choice[]>("assets/questions.json");
}
}
