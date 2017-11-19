import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/map';
import {plainToClass} from "class-transformer";

@Injectable()
export class AjaxService {

  dbName = 'intercept';
  collectionName = 'organizations';
  apiKey ="dNt29mbxqxK905XC1ZK1mcH60XkjR5gh";
  apiUrl = "https://api.mlab.com/api/1/databases/" + this.dbName + "/collections/" + this.collectionName + "?apiKey=" + this.apiKey;

  organizations: any[];

  constructor(private http: Http) { }

  getOrganizations(): Observable<any> {
    return this.http.get(this.apiUrl).map(
      (res: Response) => {
        this.organizations = res.json();
        return this.organizations;
      });
  }

}
