import { AsyncPipe } from "@angular/common";
import { Component, Input, type OnInit } from "@angular/core";
import type { Repository } from "../../interface/IUser";
import { RepositoryComponent } from "../repository/repository.component";

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
