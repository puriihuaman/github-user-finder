import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class GithubService {
	private httpClient: HttpClient = inject(HttpClient);

	constructor() {}

	getUserRepository(apiUrl: string): Observable<Object> {
		return this.httpClient.get(apiUrl);
	}
}
