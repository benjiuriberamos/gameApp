import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { DetailGamesComponent } from './components/detail-games/detail-games.component';

export const routes: Routes = [
    {
        path: '', 
        component: ListGamesComponent,
        title: 'Listado de juegos',
    },
    {
        path: 'game/:id',
        component: DetailGamesComponent,
        title: 'Detalle de un juego'
    },
    {
        path: 'mas-juegos', 
        component: AppComponent,
        title: 'Más juegos',
    },
    // {
    //     path: '', 
    //     redirectTo: 'juegos', 
    //     pathMatch: 'full',
    //     title: 'Home',
    // },
];
