import { Injectable } from '@angular/core';
import { Car } from '../../shared/car.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CarService {


  
  private _url='http://localhost:3000/addcar'

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


registerCar(fileToUpload,car : Car){
  debugger;
let userid = localStorage.getItem('_id')
  const formData: FormData = new FormData();
  if(fileToUpload!=null){ formData.append('images', fileToUpload);}
  formData.append('cost', car.Cost.toString());
  formData.append('manufacturer', car.Manufacturer.toString());
  formData.append('model', car.Model.toString());
  formData.append('registration_no', car.Registration_no.toString());
  formData.append('speedometer', car.Speedometer.toString());
  formData.append('userid', userid);


console.log(formData);
debugger;
  return this._http.post(this._url, formData);
}

getCars(): Observable<any> {
  debugger;
  return this._http.get('http://localhost:3000/cars/getcars/get', httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

getCarById(id : string) {
  debugger;
  return this._http.get('http://localhost:3000/cars/getByID/'+ id).pipe(
    map(this.extractData),
    catchError(this.handleError));
}

// call node Api for display particular car detail on frontend in angular
sendEmailforprice() {
  debugger;
  return this._http.get(`http://localhost:3000/users/sendemail`, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));     
}


updateCar(registration_no: string){
  debugger;
  return this._http.put('http://localhost:3000/cars/updatecar/' + registration_no, registration_no).pipe(
    map(this.extractData),
    catchError(this.handleError));     
}

// Send car detail for user by email
sendcardetail(cardetail) {
  debugger;
  return this._http.post<any>('http://localhost:3000/users/sendcardetail', cardetail, httpOptions);
  }

  // Car Accept by user
carAccept(reg_id: string) {
  debugger;
  return this._http.put(`http://localhost:3000/cars/updateCarStatus/` + reg_id, httpOptions).pipe(
  map(this.extractData),
  catchError(this.handleError));
  }

  // send email to admin for ask a price of car
sendRejectmail(body) {
  debugger;
  return this._http.post(`http://localhost:3000/users/rejectcarrequest/`, body).pipe(
  map(this.extractData),
  catchError(this.handleError));
  }

  // Delete car's by user

  carImage(regid: string) {
    debugger;
    return this._http.put(`http://localhost:3000/cars/upload/` + regid, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
    }

}
