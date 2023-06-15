import { Component, Input } from "@angular/core";

@Component({
	selector: "app-favorite-users",
	templateUrl: "./favorite-users.component.html",
	styleUrls: ["./favorite-users.component.scss"],
})
export class FavoriteUsersComponent {
	@Input() topRepositories: any = [];

	ngOnInit(): void {}
}
