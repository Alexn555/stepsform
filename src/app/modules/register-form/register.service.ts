import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Validators} from '@angular/forms';

@Injectable()
export class AppRegisterService {

  constructor(private http: HttpClient) {
  }

  getFormStepsData(): Observable<any> {
    return this.http.get<any>('./assets/data/register-form.json').
       pipe(map(res => {
          return res;
    }));
  }

}
