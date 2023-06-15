import { Component, Input } from "@angular/core";
import { Errors } from "@core/interfaces/errors";

@Component({
	selector: "app-error-message",
	templateUrl: "./error-message.component.html",
	styleUrls: ["./error-message.component.scss"],
})
export class ErrorMessageComponent {
	@Input() errors: Errors = {} as Errors;
	@Input() isError: boolean = false;

	ngOnInit(): void {}
}
