import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arrayRemove, arrayUpsert, setLoading } from '@datorama/akita';




import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JProject } from '../data/project';
import { ProjectStore } from '../data/project.store';
import { DateUtil } from '../data/utils/date';
import { Order } from '../interfaces/order';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 
  baseUrl: string;
  constructor(private _http: HttpClient, private _store: ProjectStore) {
    this.baseUrl ='/assets/data'
  }
  getProject() {
    this._http
      .get<JProject>(`${this.baseUrl}/project.json`)
      .pipe(
        setLoading(this._store),
        tap((project) => {
          this._store.update((state) => ({
              ...state,
              ...project
            }));
        }),
        catchError((error) => {
          this._store.setError(error);
          return of(error);
        })
      )
      .subscribe();
  }

  setLoading(isLoading: boolean) {
    this._store.setLoading(isLoading);
  }

 

  
  deleteIssue(issueId: string) {
    this._store.update((state) => {
      const issues = arrayRemove(state.issues, issueId);
      return {
        ...state,
        issues
      };
    });
  }


}
