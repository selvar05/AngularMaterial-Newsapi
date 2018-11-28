
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map,catchError,tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  apiKey:string = "YOUR API KEY";
  apiUrl:string = "https://newsapi.org/v2/top-headlines"
  country:String = "in"
  constructor(private http:HttpClient) { }
  private extractData(res:Response){
    let body = res;
    return body || {}
  }
  getNews():Observable<any>{
    return this.http.get(this.apiUrl+'?country='+this.country+'&apikey='+this.apiKey).pipe(
      map(this.extractData)
    );

  }
  getNewsDetail(id):Observable<any>{
    return this.http.get(this.apiUrl+'?country='+this.country+'&apikey='+this.apiKey).pipe(
      map(this.extractData)
    );

  }
}
