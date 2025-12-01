import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ScrollRevealDirective } from './Shared/scroll-reveal.directive';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ToolsComponent } from './Components/tools/tools.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { JourneyComponent } from './Components/journey/journey.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    ScrollRevealDirective,
    ServicesComponent,
    AboutComponent,
    NavbarComponent,
    ToolsComponent,
    ProjectsComponent,
    JourneyComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
