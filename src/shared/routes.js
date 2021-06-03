import Welcome from 'shared/pages/Welcome'
import Characters from 'shared/pages/Characters'
import Character from 'shared/pages/Character'

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
    path: '/characters',
    component: Characters,
    isExact: true
  }
]

export default routes
