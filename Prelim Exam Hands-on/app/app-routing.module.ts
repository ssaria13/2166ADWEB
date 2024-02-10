import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PartnersComponent } from './partners/partners.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  
  {
    path:'app',
    component: AppComponent
  },
    {path:'about',
    component: AboutComponent
  },
    {path:'partners',
  component: PartnersComponent
},
{
  path:'main',
component: MainComponent
},
{
  path:'contacts',
component: ContactsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }