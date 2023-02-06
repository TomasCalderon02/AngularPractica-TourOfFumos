import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Fumos } from './Fumos';
import { FUMOS } from './Fumo-list';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FumoServiceService {

  private fumosUrl = 'api/fumos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* Obtener todos */
  getFumos(): Observable<Fumos[]>{
    return this.http.get<Fumos[]>(this.fumosUrl)
    .pipe(tap(_ => this.log('fetched Fumos')),
    catchError(this.handleError<Fumos[]>('getFumos', [])));
  }

  /* Buscar por ID */
  getFumo(id: number):Observable<Fumos>{
    const url = `${this.fumosUrl}/${id}`;
    return this.http.get<Fumos>(url).pipe(
      tap(_ => this.log(`fetched Fumo ID=${id}`)),
      catchError(this.handleError<Fumos>(`getFumo id=${id}`))
    )
  }


  private log(message:string){
    this.messageService.add(`FumoService:${message}`);
  }
}
