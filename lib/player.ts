import { stores } from './stores'

const XP_PER_VISIT = 40
const LEVELS = ['Newcomer', 'Explorer', 'Local', 'Regular', 'Insider', 'Legend']

export function getPlayer() {
  const visits = stores.reduce((sum, s) => sum + s.visits, 0)
  const xp = visits * XP_PER_VISIT
  const perLevel = 300
  const level = Math.min(Math.floor(xp / perLevel), LEVELS.length - 1)
  const intoLevel = xp - level * perLevel
  const storesVisited = stores.filter((s) => s.visits > 0).length
  const readyRewards = stores.filter((s) => s.reward && s.reward.points >= s.reward.goal).length

  const badges = [
    { id: 'first', label: 'First order', earned: visits > 0, hint: 'Place your first order' },
    { id: 'explorer', label: 'Explorer', earned: storesVisited >= 5, hint: 'Order from 5 different stores' },
    { id: 'regular', label: 'Regular', earned: stores.some((s) => s.visits >= 10), hint: '10 visits at one store' },
    { id: 'early', label: 'Early bird', earned: true, hint: 'Order before 8am' },
    { id: 'collector', label: 'Collector', earned: false, hint: 'Redeem 5 rewards' },
    { id: 'streak', label: '4-week streak', earned: false, hint: 'Order every week for a month' },
  ]

  return {
    name: 'Alex',
    level: level + 1,
    title: LEVELS[level],
    nextTitle: LEVELS[Math.min(level + 1, LEVELS.length - 1)],
    xp,
    levelProgress: intoLevel / perLevel,
    xpToNext: perLevel - intoLevel,
    weekStreak: 3,
    storesVisited,
    readyRewards,
    badges,
    quest: { label: 'Try 3 different stores this week', progress: 2, goal: 3, rewardXp: 120 },
  }
}
