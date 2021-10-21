import Login from '../views/Login'
import Characters from '../views/Characters'
import Character from "../views/Character";

const routes = [
  {
    path: '/',
    component: Login,
    exact: true,
    meta : {
			requiresAuth : false
		}
  },
  {
    path: '/characters',
    component: Characters,
    exact: true,
    meta      : {
			requiresAuth : true
		}
  },
  {
    path: '/characters/:id',
    component: Character,
    exact: true,
    meta : {
			requiresAuth : true
		}
  }
];

export default routes;