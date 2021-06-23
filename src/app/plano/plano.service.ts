import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PlanoDto} from '../../model/plano-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  planos: PlanoDto[];

  listAll(): Observable<PlanoDto[]> {
    const url = `${environment.config.URL_API}/plano/` ;
    return this.httpC.get<PlanoDto[]>(url).pipe(
      map((planos) => planos)
    );
  }
  save(plano: PlanoDto): Observable<PlanoDto>{
    const url = `${environment.config.URL_API}/plano/add` ;
    return this.httpC.post<PlanoDto>(url, plano).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(plano: PlanoDto): Observable<PlanoDto>{
    const url = `${environment.config.URL_API}/plano/edit` ;
    return this.httpC.put<PlanoDto>(url, plano).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true );
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  findById(id: number): Observable<PlanoDto> {
    const url = `${environment.config.URL_API}/plano/` ;
    return this.httpC.get<PlanoDto>(url + id).pipe(
      map((plano) => plano),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/plano/delete/` ;
    this.httpC.delete<PlanoDto>(url + id).pipe(
      map((plano) => plano),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
