export type StoreType = 'Restaurant' | 'Café' | 'Bakery' | 'Bar' | 'Retail'
export type StoreStatus = 'open' | 'closed' | 'vacation'

export type Store = {
  id: string
  name: string
  type: StoreType
  status: StoreStatus
  distanceKm: number
  image: string
  color: string
  fulfilment: ('Dine in' | 'Takeaway' | 'Delivery')[]
  offer?: string
  reward?: { points: number; goal: number; label: string }
  visits: number
}

export const stores: Store[] = [
  {
    id: 'bakery-shop',
    name: 'Bakery Shop',
    type: 'Bakery',
    status: 'open',
    distanceKm: 0.35,
    image: '/stores/bakery.png',
    color: '#5b3a1e',
    fulfilment: ['Dine in', 'Takeaway'],
    reward: { points: 7, goal: 10, label: 'Free pastry' },
    visits: 14,
  },
  {
    id: 'hard-rock-coffee',
    name: 'Hard Rock coffee',
    type: 'Café',
    status: 'open',
    distanceKm: 1.2,
    image: '/stores/coffee.png',
    color: '#8a3b2f',
    fulfilment: ['Takeaway'],
    offer: 'Special offers',
    reward: { points: 1, goal: 2, label: 'Free flat white' },
    visits: 6,
  },
  {
    id: 'fortuna',
    name: 'Fortuna',
    type: 'Restaurant',
    status: 'open',
    distanceKm: 2.0,
    image: '/stores/pizzeria.png',
    color: '#2f5d8a',
    fulfilment: ['Delivery', 'Takeaway'],
    reward: { points: 260, goal: 400, label: '15% off' },
    visits: 9,
  },
  {
    id: 'test',
    name: 'Test',
    type: 'Restaurant',
    status: 'closed',
    distanceKm: 2.4,
    image: '/stores/greens.png',
    color: '#2f7a5b',
    fulfilment: ['Takeaway'],
    reward: { points: 20, goal: 20, label: '20% off' },
    visits: 3,
  },
  {
    id: 'chez-gaspi',
    name: 'Chez Gaspi',
    type: 'Restaurant',
    status: 'open',
    distanceKm: 3.1,
    image: '/stores/bistro.png',
    color: '#6d28d9',
    fulfilment: ['Dine in'],
    visits: 0,
  },
  {
    id: 'arcade',
    name: 'Arcade',
    type: 'Bar',
    status: 'vacation',
    distanceKm: 4.6,
    image: '/stores/bar.png',
    color: '#a3302f',
    fulfilment: ['Dine in'],
    visits: 1,
  },
]

export const storeTypes: ('All' | StoreType)[] = ['All', 'Restaurant', 'Café', 'Bakery', 'Bar', 'Retail']

export const activeOrder = {
  id: '1882',
  storeId: 'bakery-shop',
  storeName: 'Bakery Shop',
  steps: ['Received', 'Preparing', 'Ready', 'Collected'],
  current: 1,
  etaMinutes: 6,
}

export const formatDistance = (km: number) => (km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`)
