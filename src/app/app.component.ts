import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { ErrorMessageComponent } from "@components/error-message/error-message.component";
import { IconSvgComponent } from "@components/icon-svg/icon-svg.component";
import { ProfileComponent } from "@components/profile/profile.component";
import { RepositoriesComponent } from "@components/repositories/repositories.component";
import { RepositoryComponent } from "@components/repository/repository.component";
import { SearchformComponent } from "@components/searchform/searchform.component";
import type { CustomError } from "@core/CustomError";
import type { Repository, User } from "@interface/IUser";
import { RepositoryService } from "@services/repository.service";
import { catchError, EMPTY, type Observable } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
    FormsModule,
    SearchformComponent,
    IconSvgComponent,
    ProfileComponent,
    RepositoryComponent,
    RepositoriesComponent,
    ErrorMessageComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  public user$!: Observable<User>;
  public repositories$!: Observable<Repository[]>;
  private repositoryService = inject(RepositoryService);
  private user: string = "midudev";

  public errors!: CustomError;

  constructor() {}

  ngOnInit(): void {
    this.getUser();
    this.getRepositories();
  }

  searchUser(username: string): void {
    this.user = username;
    this.getUser();
    this.getRepositories();
  }

  private getUser(): void {
    this.user$ = this.repositoryService.getUser(this.user).pipe(
      catchError((error: CustomError) => {
        this.errors = error;
        return EMPTY;
      })
    );
  }

  private getRepositories(): void {
    this.repositories$ = this.repositoryService.getRepositories(this.user).pipe(
      catchError((error: CustomError) => {
        this.errors = error;
        return EMPTY;
      })
    );
  }
}
