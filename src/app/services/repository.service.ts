import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import type { Repository, User } from "../interface/IUser";

@Injectable({
  providedIn: "root",
})
export class RepositoryService {
  private API_URL: string = "https://api.github.com/users";
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
