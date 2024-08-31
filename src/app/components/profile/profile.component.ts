import { AsyncPipe } from "@angular/common";
import { Component, Input, type OnInit } from "@angular/core";
import type { User } from "../../interface/IUser";
import { IconSvgComponent } from "../icon-svg/icon-svg.component";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [AsyncPipe, IconSvgComponent],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent implements OnInit {
  @Input() user!: User;

  ngOnInit(): void {}
}
