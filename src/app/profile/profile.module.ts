import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogsComponent } from "./blogs/blogs.component";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { NgxPaginationModule } from 'ngx-pagination';
//import { SplitPipe } from './split.pipe';
//import { ExtraCiricularComponent } from './extra-ciricular/extra-ciricular.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //SnotifyModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IntroComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    BlogsComponent,
    ProjectComponent
  ],
  /*providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]*/
})
export class ProfileModule { }