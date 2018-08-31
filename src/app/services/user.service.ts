import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../../shared/user.model';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private _url='http://localhost:3000/users/register';
  //private _loginurl='http://localhost:3000/users/login';
    private _url='https://carbazarapinode.herokuapp.com/'

  //private serviceUrl = "http://localhost:3000/users/getUsers"
  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
     // console.error(
      //  `Backend returned code ${error.status}, ` +
      //  `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
   const body = res;
    return body || { };
  }

registerUser(user : User){
    const userdata = {
      password: user.Password,
      email: user.Email,
      firstname: user.FirstName,
      lastname: user.LastName
    }
    debugger;
    return this._http.post(this._url+'users/register', userdata);
  }

  loginUser(user){
    return this._http.post<any>(this._url+'users/login',user)
  }

  getUser(): Observable<any>{
    debugger;
    return this._http.get(this._url +'users/getUsers', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  // Get car's by user
getCarUserList(userid) {

  return this._http.get<any>(this._url+'cars/getcarbyuser/' + userid, userid);
}

getUserByEmail() {
  return this._http.get(this._url+`users/resetemail`, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));     
}

  updatepassword(password) {
    debugger;
    return this._http.put(this._url+'users/updateuserpassword/' + password, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  verfyUserEmail(email) {
    debugger;
    return this._http.put<any>(this._url+'users/changeuserstatus/' + email, httpOptions);
    }
    // ChangePassword service

changePassword(email, registerUserData) {
  debugger;
  return this._http.post<any>(this._url+'users/changepassword/' + email, registerUserData);
  }
  deleteCarbyuser(r) {
    debugger;
    return this._http.put<any>(this._url+'cars/deletecar/' + r, httpOptions);
    }
}
