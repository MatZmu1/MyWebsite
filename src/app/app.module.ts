import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./footer/footer.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { environment } from "../environments/environment.prod";

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "about-me",
    component: AboutComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "404",
    component: ErrorComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    HeaderComponent,
    MainComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
