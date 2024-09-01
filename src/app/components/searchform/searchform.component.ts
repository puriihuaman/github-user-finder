import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconSvgComponent } from "@components/icon-svg/icon-svg.component";

@Component({
  selector: "app-searchform",
  standalone: true,
  imports: [FormsModule, IconSvgComponent, ReactiveFormsModule],
  templateUrl: "./searchform.component.html",
  styleUrl: "./searchform.component.scss",
})
export class SearchformComponent {
  public username: string = "midudev";
  public isValid: boolean = true;
  public message: string = "A user must enter";

  @Output() usernameEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  searchUser(): void {
    this.isValid = false;
    if (this.username.trim() === "") {
      this.message = "The user is required";
    } else if (this.username.trim().length === 0) {
      this.message = "User must be at least 1 character";
    } else if (
      this.username.trim() === "gcpglobal" &&
      !/^(?!.*gcpglobal).*$/.test(this.username)
    ) {
      this.message = "It is not allowed to search for this user";
    } else {
      this.isValid = true;
      this.usernameEmitter.emit(this.username);
    }
  }
}
