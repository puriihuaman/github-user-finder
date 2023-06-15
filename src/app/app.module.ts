import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FavoriteUsersComponent } from "@components/favorite-users/favorite-users.component";
import { UserDetailsComponent } from "@components/user-details/user-details.component";
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
	declarations: [AppComponent, FavoriteUsersComponent, UserDetailsComponent, ErrorMessageComponent, LoadingComponent, ThemeComponent],
	imports: [BrowserModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
