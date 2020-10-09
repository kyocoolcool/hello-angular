import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './core/auth.service';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {TodoModule} from './todo/todo.module';
import {CoreModule} from './core/core.module';
import {MdlModule} from '@angular-mdl/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    TodoModule,
    CoreModule,
    MdlModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
