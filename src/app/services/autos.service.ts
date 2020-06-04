import { Injectable } from '@angular/core';
import { Automovil } from '../models';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL = "https://catalogo-autos.herokuapp.com/api/autos/limit/50";
  private autosActionURL = "https://catalogo-autos.herokuapp.com/api/autos";

  
  
  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messagesServices.add('Autos Obtenidos'))
    );
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`,auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap((result) => {
        this.messagesServices.add(`Auto modificado id: ${result.data._id}`);    
      } )
    );
  }

  deleteAutos(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(() => {
        this.messagesServices.add('Auto eleminado');
      })
    );
  }

  addAutos(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionURL,auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap((result) => {
        this.messagesServices.add(`Auto añadido id: ${result.data._id}`);
      })
    );
  }

  private handleError<T>(operation = 'operacion',result?: T){
    return(error: any): Observable<T> => {
      this.messagesServices.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }

}