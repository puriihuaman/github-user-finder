import { AsyncPipe } from "@angular/common";
import { Component, Input, type OnInit } from "@angular/core";
import { IconSvgComponent } from "@components/icon-svg/icon-svg.component";
import type { User } from "@core/interface/iuser";

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
