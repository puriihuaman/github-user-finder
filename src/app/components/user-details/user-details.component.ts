import { Component, Input } from "@angular/core";
import { GithubUser } from "@core/interfaces/user";

@Component({
	selector: "app-user-details",
	templateUrl: "./user-details.component.html",
	styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent {
	@Input() githubUser: GithubUser = {} as GithubUser;

	currentDate: Date = new Date();
}
