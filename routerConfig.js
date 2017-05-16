 import Goods from './src/components/goods/Goods.vue'
 import Ratings from './src/components/ratings/Ratings.vue'
 import Seller from './src/components/seller/Seller.vue'
// import Hello from './src/components/Hello.vue'


const routes = [
  {path: '/goods', component: Goods},
  {path: '/ratings', component: Ratings},
  {path: '/seller', component: Seller},
  {path: '*', redirect: '/goods'}
]
export default routes
