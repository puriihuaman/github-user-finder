import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { IconSvgComponent } from "../icon-svg/icon-svg.component";

@Component({
  selector: "app-searchform",
  standalone: true,
  imports: [FormsModule, IconSvgComponent, ReactiveFormsModule],
  templateUrl: "./searchform.component.html",
  styleUrl: "./searchform.component.scss",
})
export class SearchformComponent {
  public user: FormGroup = new FormGroup({});

  @Output() usernameEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.user = new FormGroup({
      username: new FormControl<string>("midudev", [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  searchUser(): void {
    const username = this.user.value;
    this.usernameEmitter.emit(username);
  }
}
