import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './category/article/article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'category/article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(routes);
