import Character from './pages/Character'
import Welcome from './pages/Welcome'

const routes = [
  {
    path: '/character/:id',
    component: Character
  },
  {
    path: '/character',
    component: Character
  },
  {
    path: '/',
    component: Welcome
  }
]

export default routes
