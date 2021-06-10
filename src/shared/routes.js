import Welcome from 'shared/pages/Welcome'
import Characters from 'shared/pages/Characters'
import Character from 'shared/pages/Character'
import Guides from 'shared/pages/Guides'
import AdventureRank from 'shared/pages/Guides/AdventureRank'

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
  },
  {
    path: '/guides',
    component: Guides,
    isExact: true
  },
  {
    path: '/guides/adventure-rank',
    component: AdventureRank,
    isExact: true
  }
]

export default routes
