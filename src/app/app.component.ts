import { Component, inject } from "@angular/core";
import { GithubService } from "./services/github.service";
import { environment } from "@env/environment";
import { catchError, map, of } from "rxjs";
import { UserMapper } from "@core/constants/user-mapper";
import { GithubUser } from "@core/interfaces/user";
import { Errors } from "@core/interfaces/errors";
import { RepositoryMapper } from "@core/constants/repository-mapper";
import { repository } from "@core/interfaces/repository";

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
				.getUserRepository(userUrl)
				.pipe(
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
		this.githubService
			.getUserRepository(url)
			.pipe(
				map((data: any) => {
					const repositories = Array.from(data);

					return repositories
						.map((data: any) => RepositoryMapper(data))
						.sort(
							(repoA: repository, repoB: repository) =>
								repoB.stargazers_count - repoA.stargazers_count
						)
						.slice(0, 3);
				})
			)
			.subscribe((resp) => {
				this.topRepositories = resp;
			});
	}
}
