import { Component, Input } from "@angular/core";
import type { Repository } from "../../interface/IUser";
import { IconSvgComponent } from "../icon-svg/icon-svg.component";

@Component({
  selector: "app-repository",
  standalone: true,
  imports: [IconSvgComponent],
  templateUrl: "./repository.component.html",
  styleUrl: "./repository.component.scss",
})
export class RepositoryComponent {
  @Input() repository!: Repository;
}
