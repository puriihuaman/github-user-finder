import { Component, Input } from "@angular/core";
import { IconSvgComponent } from "@components/icon-svg/icon-svg.component";
import type { Repository } from "@interface/irepository";

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
