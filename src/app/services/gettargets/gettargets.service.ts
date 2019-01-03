import { Injectable } from '@angular/core';
import { Target } from '../../models/target';
import { Config } from '../../models/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GettargetsService {
  private targetsUrl = 'api/targets';
  private configsUrl = 'api/configs';  // URL to web api
  constructor(private http: HttpClient) { }

  getTargets(): Observable<Target[]> {
    return this.http.get<Target[]>(this.targetsUrl)
    .pipe(
      catchError(this.handleError('getTargets', []))
    );
  }
  getTarget(id: number): Observable<Target> {
    const url = `${this.targetsUrl}/${id}`;
    return this.http.get<Target>(url).pipe(
      catchError(this.handleError<Target>(`getTarget id=${id}`))
    );
  }
  /** PUT: update the target on the server */
updateTarget (target: Target): Observable<any> {
  return this.http.put(this.targetsUrl, target, httpOptions).pipe(
    catchError(this.handleError<any>('updateTaget'))
  );
}
/** POST: add a new target to the server */
addTarget (target: Target): Observable<Target> {
  return this.http.post<Target>(this.targetsUrl, target, httpOptions).pipe(

  );
}
deleteTarget (target: Target | number): Observable<Target> {
  const id = typeof target === 'number' ? target : target.id;
  const url = `${this.targetsUrl}/${id}`;

  return this.http.delete<Target>(url, httpOptions).pipe(
    catchError(this.handleError<Target>('deleteTarget'))
  );
}
getConfigs(): Observable<any> {
  return this.http.get<Config>(this.configsUrl)
  .pipe(
    catchError(this.handleError('getConfigs', []))
  );
}
/**  TO DO: Have to work on this: the method throws error in-memory db api */
editConfig (configs: Config): Observable<any> {
  //console.log("service:"+configs );
  return this.http.put(this.configsUrl, configs, httpOptions).pipe(
  catchError(this.handleError<any>('updateConfig'))
);
}
editFinConfig (x): Observable<any> {
  //console.log("service:"+configs );
  return this.http.put(this.configsUrl, x, httpOptions).pipe(
  catchError(this.handleError<any>('updateFinConfig'))
);
}
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 

 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
