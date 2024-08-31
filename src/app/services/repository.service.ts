import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "@environment/environment.development";
import type { Repository, User } from "@interface/IUser";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RepositoryService {
  private API_URL: string = environment.apiUrlBase;
  private httpClient = inject(HttpClient);

  constructor() {}

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL}/${username}`);
  }

  getRepositories(username: string): Observable<Repository[]> {
    return this.httpClient
      .get<Repository[]>(`${this.API_URL}/${username}/repos`)
      .pipe(
        map((respositories: Repository[]): Repository[] => {
          return respositories
            .sort(
              (a: Repository, b: Repository): number =>
                b.stargazers_count - a.stargazers_count
            )
            .slice(0, 3);
        })
      );
  }
}
