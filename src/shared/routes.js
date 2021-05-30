import Character from 'shared/pages/Character'
import Welcome from 'shared/pages/Welcome'

const routes = [
  {
    path: '/',
    component: Welcome,
    isExact: true
  },
  {
    path: '/character/:id',
    component: Character,
    isExact: true
  },
  {
    path: '/character',
    component: Character,
    isExact: true
  }
]

export default routes
