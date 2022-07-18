import { routerLogin } from 'src/view/Auth/Login/router';
import { routerViewProfile } from 'src/view/Auth/Profile/router';
import { routerHomepage } from 'src/view/Homepage/router';

import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerHomepage, routerViewProfile];

export const publicPage: IRouter[] = [routerLogin];
