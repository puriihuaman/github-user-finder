import { AsyncPipe } from "@angular/common";
import { Component, Input, type OnInit } from "@angular/core";
import { RepositoryComponent } from "@components/repository/repository.component";
import type { Repository } from "@interface/IUser";

@Component({
  selector: "app-repositories",
  standalone: true,
  imports: [AsyncPipe, RepositoryComponent],
  templateUrl: "./repositories.component.html",
  styleUrl: "./repositories.component.scss",
})
export class RepositoriesComponent implements OnInit {
  @Input() repositories!: Repository[];

  ngOnInit(): void {}
}
