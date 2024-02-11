import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private baseUrl = 'http://127.0.0.1:8000/jobs/all/'
  constructor(private http:HttpClient) { }


  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
   }
}
