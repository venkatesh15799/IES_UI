import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCitizen } from './user-citizen';
import { Observable } from 'rxjs';
@Injectable()
export class ApplicationRegistrationService {

  constructor(private httpClient: HttpClient) {
  }

  insertUserCitizen(newUserCitizen: UserCitizen): Observable<UserCitizen>
  {
    return this.httpClient.post<UserCitizen>("/api/citizen", newUserCitizen);
  }
}
