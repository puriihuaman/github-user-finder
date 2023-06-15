import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class GithubService {
	private httpClient: HttpClient = inject(HttpClient);

	constructor() {}

	getUser(apiUrl: string): Observable<Object> {
		const headers = {
			Authorization: `Bearer ${environment.API_TOKEN}`,
		};
		return this.httpClient.get(apiUrl, { headers });
	}

	getRepositoriesWithMoreStars(apiUrl: string): Observable<Object> {
		const headers = {
			Authorization: `Bearer ${environment.API_TOKEN}`,
		};

		return this.httpClient.get(apiUrl, { headers });
	}
}
