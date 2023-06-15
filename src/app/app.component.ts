import { Component, inject } from "@angular/core";
import { GithubService } from "./services/github.service";
import { environment } from "@env/environment";
import { catchError, map, of, tap } from "rxjs";
import { UserMapper } from "@core/constants/mapper";
import { GithubUser } from "@core/interfaces/user";
import { Errors } from "@core/interfaces/errors";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	private githubService: GithubService = inject(GithubService);

	title = "github-user-finder";
	txtUser: string = "";
	githubUser: GithubUser = {} as GithubUser;
	isEmpty: boolean = false;
	isError: boolean = false;
	errors: Errors = {} as Errors;
	topRepositories: any[] = [];

	ngOnInit(): void {
		this.txtUser = "midudev";
	}

	public getUser() {
		const txtValue = this.txtUser;

		if (this.txtUser !== "") {
			const userUrl: string = `${environment.API_URL}/${this.txtUser}`;

			this.githubService
				.getUser(userUrl)
				.pipe(
					tap((res) => {
						console.log(console.log(res));
					}),
					map((data: any) => UserMapper(data)),
					catchError((error: any) => {
						this.isError = true;

						if (error?.status === 404 && !error.ok) {
							this.errors = {
								status: error.status,
								message: error.error.message,
								description: `Error in the request and/or User "${txtValue}" not found`,
							};
						}

						return of();
					})
				)
				.subscribe((user: GithubUser) => {
					this.getRepositoriesWithMoreStars(user.repos_url);
					this.githubUser = user;
				});

			this.isEmpty = false;
			this.txtUser = "";
		} else {
			this.isEmpty = true;
		}

		setTimeout(() => {
			this.isError = false;
		}, 3000);
	}

	getRepositoriesWithMoreStars(url: string) {
		console.log(url);
		this.githubService
			.getRepositoriesWithMoreStars(url)
			.pipe(
				// tap((resp: any) => {
				// 	const repositories = Array.from(resp);

				// 	console.log(
				// 		repositories
				// 			.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
				// 			.slice(0, 3)
				// 	);
				// }),
				map((data: any) => {
					const repositories = Array.from(data);

					return repositories
						.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
						.slice(0, 3);
				})
			)
			.subscribe((resp) => {
				console.log(resp);
				this.topRepositories = resp;
			});
	}
}
