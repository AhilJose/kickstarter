import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MessageServiceProvider {

	private url: string = "http://starlord.hackerearth.com/kickstarter";
  constructor(private http: Http) {
    console.log('Hello MessageServiceProvider Provider');
  }
  getMessages(){
  	return this.http.get(this.url)
  	.map(this.extractData)
//	.do(this.logResponse)
  	.catch(this.catchError)
  }

  private catchError(error: Response | any) {
  	console.log(error);
  	return Observable.throw(error.json().error || "Server Error");
  }

/*  private logResponse(res: Response) {
  	console.log(res);
  }
*/
  private extractData(res: Response) {
  	return res.json();
  }

}
