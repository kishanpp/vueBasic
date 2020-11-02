// routes.js

// import components
import Welcome from './components/Welcome.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import PageNotFound from './components/404.vue';
import Products from './components/Products.vue';
import Product_page from './components/Product-page.vue';
import Checkout_page from './components/checkout.vue';


const routes = [
	{
		name: 'root',
		path : '/', 
		//component : Welcome,
		isPublic: false,
		pageTitle: 'Vue Demo',
		meta : {
			isPublic: false
		}
		/*redirect : {
			name : '/login',
			component : Login
		}*/
	},
	{
		name: 'welcome',
		path : '/welcome', 
		component : Welcome,
		isPublic: false,
		pageTitle: 'Welcome to App'
	},
	{
		name: 'home',
		path : '/home', 
		component : Home,
		isPublic: false,
		meta : {
			isPublic: false,
			requiresAuth: true
		},
		pageTitle: 'E-SHOP'
	},
	{
		name: 'register',
		path : '/register', 
		component : Register,
		isPublic: true,
		pageTitle: 'Sign up',
		meta : {
			isPublic: true
		}
	},
	{
		name : 'login',
		path : '/login', 
		component : Login,
		isPublic: true,
		pageTitle: 'Sign in',
		meta : {
			isPublic: true
		}
	},
	{
		name: '404',
		path: '*', 
		component: PageNotFound,
		isPublic: false,
		pageTitle: 'Invalid navigation occured',
	},
	{
		name: 'Products',
		path: '/products', 
		component: Products,
		isPublic: false,
		pageTitle: 'E-SHOP Products',
		meta : {
			isPublic: false
		},
	},
	{
		name: 'Product_page',
		path: '/product-page', 
		component: Product_page,
		isPublic: false,
		pageTitle: 'E-SHOP Product',
		meta : {
			isPublic: false
		},
	},
	{
		name: 'Checkout_page',
		path: '/checkout', 
		component: Checkout_page,
		isPublic: false,
		pageTitle: 'E-SHOP Product',
		meta : {
			isPublic: false
		},
	},
];

export default routes;