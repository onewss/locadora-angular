import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FilialDto} from '../../model/filial-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  filiais: FilialDto[];

  listAll(): Observable<FilialDto[]> {
    const url = `${environment.config.URL_API}/filial/` ;
    return this.httpC.get<FilialDto[]>(url).pipe(
      map((filiais) => filiais)
    );
  }
  save(filial: FilialDto): Observable<FilialDto>{
    const url = `${environment.config.URL_API}/filial/add` ;
    return this.httpC.post<FilialDto>(url, filial).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(filial: FilialDto): Observable<FilialDto>{
    const url = `${environment.config.URL_API}/filial/edit` ;
    return this.httpC.put<FilialDto>(url, filial).pipe(
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

  findById(id: number): Observable<FilialDto> {
    const url = `${environment.config.URL_API}/filial/` ;
    return this.httpC.get<FilialDto>(url + id).pipe(
      map((filial) => filial),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/filial/delete/` ;
    this.httpC.delete<FilialDto>(url + id).pipe(
      map((filial) => filial),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
