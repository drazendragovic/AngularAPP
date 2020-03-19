import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

