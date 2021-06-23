import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MarcaDto} from '../../model/marca-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private httpC: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  marcas: MarcaDto[];

  listAll(): Observable<MarcaDto[]> {
    const url = `${environment.config.URL_API}/marca/` ;
    return this.httpC.get<MarcaDto[]>(url).pipe(
      map((marcas) => marcas)
    );
  }
  save(marca: MarcaDto): Observable<MarcaDto>{
    const url = `${environment.config.URL_API}/marca/add` ;
    return this.httpC.post<MarcaDto>(url, marca).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  edit(marca: MarcaDto): Observable<MarcaDto>{
    const url = `${environment.config.URL_API}/marca/edit` ;
    return this.httpC.put<MarcaDto>(url, marca).pipe(
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

  findById(id: number): Observable<MarcaDto> {
    const url = `${environment.config.URL_API}/marca/` ;
    return this.httpC.get<MarcaDto>(url + id).pipe(
      map((marca) => marca),
      catchError( (e) => this.errorHandler(e))
    );
  }

  destroy(id: number): void {
    const url = `${environment.config.URL_API}/marca/delete/` ;
    this.httpC.delete<MarcaDto>(url + id).pipe(
      map((marca) => marca),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
