import { Component, Input } from "@angular/core";
import type { CustomError } from "../../core/CustomError";

@Component({
  selector: "app-error-message",
  standalone: true,
  imports: [],
  templateUrl: "./error-message.component.html",
  styleUrl: "./error-message.component.scss",
})
export class ErrorMessageComponent {
  @Input() errorMessage!: CustomError;
}
