export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gimme.app'

export type Availability = 'live' | 'soon'

export type Feature = {
  slug: string
  name: string
  tagline: string
  summary: string
  status: Availability
  forWho: string
  why: string
  how: { title: string; body: string }[]
  connects: string[]
  industries: string[]
  faqs: { q: string; a: string }[]
}

export const features: Feature[] = [
  {
    slug: 'digital-storefronts',
    name: 'Digital Storefronts',
    tagline: 'Your business, beautifully online.',
    summary:
      'A customer-facing store that shapes itself around what you sell — menus, products or services — and works in any browser, no app download needed.',
    status: 'live',
    forWho: 'Any business that wants customers to browse and buy from their phone, a QR code or a shared link.',
    why: 'Customers judge you before they walk in. A fast, branded storefront answers their questions and turns a visit into an order.',
    how: [
      { title: 'Add your offering', body: 'Create categories, items, prices, photos and options from the merchant dashboard.' },
      { title: 'Share one link', body: 'Every store gets its own URL and QR code for tables, windows and socials.' },
      { title: 'Stay in sync', body: 'Opening hours, vacation mode and sold-out items update instantly for customers.' },
    ],
    connects: ['online-ordering', 'loyalty', 'operations'],
    industries: ['restaurants', 'cafes', 'retail'],
    faqs: [
      { q: 'Do customers need to download an app?', a: 'No. Storefronts open in the browser from a link or QR code.' },
      { q: 'Can I pause my store?', a: 'Yes. Stores can be marked closed or on vacation, and customers see that status in discovery.' },
    ],
  },
  {
    slug: 'online-ordering',
    name: 'Online Ordering',
    tagline: 'Make every order effortless.',
    summary:
      'Dine-in, takeaway and delivery from the same storefront, with live order status customers can follow from their phone.',
    status: 'live',
    forWho: 'Restaurants, cafés, bakeries, bars and anyone taking orders ahead.',
    why: 'Fewer phone calls, shorter queues and clear expectations for customers — without a separate ordering tool.',
    how: [
      { title: 'Choose fulfilment', body: 'Enable dine-in, takeaway or delivery per store.' },
      { title: 'Receive and prepare', body: 'Orders land in your operations view with everything the team needs.' },
      { title: 'Keep customers in the loop', body: 'Customers follow their order status in real time until it is ready.' },
    ],
    connects: ['digital-storefronts', 'operations', 'loyalty'],
    industries: ['restaurants', 'cafes', 'catering'],
    faqs: [
      { q: 'Can customers track their order?', a: 'Yes. Open orders show a live status from received through ready.' },
      { q: 'Which fulfilment types are supported?', a: 'Dine-in, takeaway and delivery can be configured per store.' },
    ],
  },
  {
    slug: 'bookings',
    name: 'Bookings & Scheduling',
    tagline: 'Appointments without the back-and-forth.',
    summary:
      'Service catalogues, staff availability and self-serve booking for salons, studios and service businesses.',
    status: 'soon',
    forWho: 'Hair and beauty, wellness, fitness and other appointment-based businesses.',
    why: 'Every booking handled by a link is one less message to answer between clients.',
    how: [
      { title: 'Define services', body: 'Durations, prices and which team members offer each service.' },
      { title: 'Set availability', body: 'Working hours and breaks per staff member.' },
      { title: 'Let clients book', body: 'Clients pick a service and a free slot from the storefront.' },
    ],
    connects: ['digital-storefronts', 'loyalty', 'ai'],
    industries: ['hair-beauty', 'fitness'],
    faqs: [
      { q: 'Is booking available today?', a: 'Bookings are in development. Book a demo to hear about early access.' },
    ],
  },
  {
    slug: 'operations',
    name: 'Operations',
    tagline: 'Less chaos behind the scenes.',
    summary:
      'Kitchen views, order queues and business analytics that keep the team focused on the next thing that matters.',
    status: 'live',
    forWho: 'Teams who prepare, pack and hand over orders every day.',
    why: 'When the whole team sees the same queue, nobody has to shout across the counter.',
    how: [
      { title: 'One queue', body: 'Incoming orders appear in a shared kitchen view in the order they need attention.' },
      { title: 'Move orders forward', body: 'Update status as you prepare, which customers see instantly.' },
      { title: 'Learn from the week', body: 'Analytics show what sells and when you are busiest.' },
    ],
    connects: ['online-ordering', 'catering', 'ai'],
    industries: ['restaurants', 'catering', 'cafes'],
    faqs: [
      { q: 'Does it replace my POS?', a: 'Gimme focuses on digital orders and operations. Talk to us about how it fits alongside your current setup.' },
    ],
  },
  {
    slug: 'catering',
    name: 'Catering & Weekly Menus',
    tagline: 'Plan the week. Prep with confidence.',
    summary:
      'Weekly menus, pre-orders and production overviews so you cook exactly what was ordered.',
    status: 'live',
    forWho: 'Catering companies, corporate lunch providers and meal-prep kitchens.',
    why: 'Pre-orders turn guesswork into a production list — less waste, fewer surprises.',
    how: [
      { title: 'Publish the week', body: 'Set dishes for each day and open pre-ordering.' },
      { title: 'Collect pre-orders', body: 'Customers choose their meals ahead of time.' },
      { title: 'Produce from totals', body: 'See quantities per dish per day before you start cooking.' },
    ],
    connects: ['operations', 'online-ordering'],
    industries: ['catering'],
    faqs: [
      { q: 'Can customers order for the whole week?', a: 'Yes. Weekly menus let customers pre-order dishes for upcoming days.' },
    ],
  },
  {
    slug: 'loyalty',
    name: 'Loyalty & Rewards',
    tagline: 'Give customers a reason to come back.',
    summary:
      'Points and rewards that customers collect automatically with every order and redeem from their wallet.',
    status: 'live',
    forWho: 'Any business with regulars — or that wants more of them.',
    why: 'Paper stamp cards get lost. A wallet in the customer’s pocket keeps you top of mind.',
    how: [
      { title: 'Set a reward', body: 'Choose what customers earn, such as a discount after a points threshold.' },
      { title: 'Earn automatically', body: 'Points are added to the customer wallet with each order.' },
      { title: 'Redeem in one tap', body: 'Ready rewards show up in the wallet and at checkout.' },
    ],
    connects: ['online-ordering', 'digital-storefronts'],
    industries: ['cafes', 'restaurants', 'retail'],
    faqs: [
      { q: 'Where do customers see their rewards?', a: 'In the Gimme wallet, which shows progress and ready rewards for each store.' },
    ],
  },
  {
    slug: 'ai',
    name: 'Gimme AI',
    tagline: 'Less manual work. More momentum.',
    summary:
      'An assistant that drafts store content, answers routine questions and surfaces insights — with you approving every change.',
    status: 'soon',
    forWho: 'Owners who would rather be on the floor than behind a laptop.',
    why: 'Most admin is repetitive. AI can prepare the first draft so you only review and approve.',
    how: [
      { title: 'Ask in plain language', body: '“Write descriptions for my new pastries” or “Draft a service menu.”' },
      { title: 'Review the draft', body: 'Gimme AI prepares content as a draft — nothing goes live on its own.' },
      { title: 'Approve and publish', body: 'You stay in control of prices, content and anything customer-facing.' },
    ],
    connects: ['digital-storefronts', 'operations', 'bookings'],
    industries: ['restaurants', 'hair-beauty', 'catering'],
    faqs: [
      { q: 'Does Gimme AI publish changes automatically?', a: 'No. Gimme AI is being designed so that consequential changes always require your approval.' },
      { q: 'Is Gimme AI available now?', a: 'Gimme AI is in development. The demos on this site are simulated to show the intended workflow.' },
    ],
  },
]

export type Industry = {
  slug: string
  name: string
  short: string
  image: string
  headline: string
  intro: string
  challenges: string[]
  featureSlugs: string[]
  aiUseCases: string[]
  outcomes: string[]
  faqs: { q: string; a: string }[]
  mockup: MockupKind
}

export type MockupKind = 'restaurant' | 'cafe' | 'catering' | 'salon' | 'gym' | 'retail'

export const industries: Industry[] = [
  {
    slug: 'restaurants',
    name: 'Restaurants',
    short: 'Menus, orders, kitchen',
    image: '/stores/bistro.png',
    headline: 'Full tables. Calm kitchen.',
    intro: 'Take orders from tables, takeaway and delivery in one place, and keep the kitchen working from a single queue.',
    challenges: ['Phone orders interrupt service', 'Paper tickets get lost in the rush', 'Regulars are hard to reward consistently'],
    featureSlugs: ['digital-storefronts', 'online-ordering', 'operations', 'loyalty'],
    aiUseCases: ['Draft dish descriptions from a photo and a few words', 'Summarise which dishes sold best this week'],
    outcomes: ['Fewer calls during peak hours', 'One shared view of every order', 'Rewards that collect themselves'],
    faqs: [
      { q: 'Can guests order from the table?', a: 'Yes. Dine-in ordering works from a QR code that opens your storefront.' },
      { q: 'Can I offer delivery?', a: 'Delivery can be enabled as a fulfilment option per store.' },
    ],
    mockup: 'restaurant',
  },
  {
    slug: 'cafes',
    name: 'Cafés',
    short: 'Order ahead, loyalty',
    image: '/stores/coffee.png',
    headline: 'Skip the queue. Keep the regulars.',
    intro: 'Let customers order their usual before they arrive, and reward every visit without a paper stamp card.',
    challenges: ['Morning rush queues', 'Stamp cards that get forgotten', 'Repeating the same order every day'],
    featureSlugs: ['online-ordering', 'loyalty', 'digital-storefronts'],
    aiUseCases: ['Write seasonal menu copy', 'Suggest which items to feature on slow afternoons'],
    outcomes: ['Shorter queues at peak', 'Digital loyalty in every pocket', 'A storefront that reflects today’s menu'],
    faqs: [{ q: 'Do customers need an account to collect points?', a: 'Rewards are tied to a customer account so they can see progress in their wallet.' }],
    mockup: 'cafe',
  },
  {
    slug: 'catering',
    name: 'Catering',
    short: 'Weekly menus, pre-orders',
    image: '/industries/catering.png',
    headline: 'Cook what was ordered. Nothing more.',
    intro: 'Publish weekly menus, collect pre-orders and turn them into a production plan your kitchen can follow.',
    challenges: ['Guessing quantities each morning', 'Orders scattered across email and chat', 'Last-minute changes'],
    featureSlugs: ['catering', 'operations', 'online-ordering'],
    aiUseCases: ['Draft next week’s menu from past favourites', 'Flag dishes with unusually low pre-orders'],
    outcomes: ['Production totals per day', 'Less food waste', 'Pre-orders in one place'],
    faqs: [{ q: 'Can I set a cut-off time for pre-orders?', a: 'Talk to us in a demo about how ordering windows fit your schedule.' }],
    mockup: 'catering',
  },
  {
    slug: 'hair-beauty',
    name: 'Hair & Beauty',
    short: 'Services, appointments',
    image: '/industries/salon.png',
    headline: 'More time in the chair. Less on the phone.',
    intro: 'A service menu, staff availability and online booking designed for salons and studios.',
    challenges: ['Booking messages between clients', 'No-shows and double bookings', 'Keeping a service list up to date'],
    featureSlugs: ['bookings', 'digital-storefronts', 'loyalty', 'ai'],
    aiUseCases: ['Create a service menu with durations and descriptions', 'Answer “Do you have time Saturday?” questions'],
    outcomes: ['Clients book themselves', 'A clear day for every stylist', 'A storefront for your services'],
    faqs: [{ q: 'Is booking live?', a: 'Bookings are in development. Join a demo to shape early access.' }],
    mockup: 'salon',
  },
  {
    slug: 'fitness',
    name: 'Gyms & Fitness',
    short: 'Classes, memberships',
    image: '/industries/gym.png',
    headline: 'Full classes. Happy members.',
    intro: 'Class schedules, memberships and member engagement in one place — designed for boutique studios and gyms.',
    challenges: ['Class sign-ups in group chats', 'Tracking who has an active membership', 'Keeping members motivated'],
    featureSlugs: ['bookings', 'loyalty', 'digital-storefronts'],
    aiUseCases: ['Draft class descriptions', 'Spot members who have not visited in a while'],
    outcomes: ['Self-serve class booking', 'Memberships at a glance', 'Rewards for consistency'],
    faqs: [{ q: 'Can members book classes today?', a: 'Class scheduling is part of our upcoming bookings work.' }],
    mockup: 'gym',
  },
  {
    slug: 'retail',
    name: 'Retail',
    short: 'Products, pickup',
    image: '/industries/retail.png',
    headline: 'Your shop, open around the clock.',
    intro: 'Show your products online, take orders for pickup or delivery, and reward the customers who keep coming back.',
    challenges: ['No time to maintain a separate web shop', 'Customers asking “do you have this?”', 'Generic loyalty schemes'],
    featureSlugs: ['digital-storefronts', 'online-ordering', 'loyalty'],
    aiUseCases: ['Write product descriptions in your brand voice', 'Organise products into clear categories'],
    outcomes: ['A storefront without a web agency', 'Click-and-collect orders', 'Rewards tied to your shop'],
    faqs: [{ q: 'Can I sell physical products?', a: 'Yes. Storefronts support products with prices, photos and options.' }],
    mockup: 'retail',
  },
]

export const faqs: { q: string; a: string; href?: string }[] = [
  {
    q: 'What is Gimme?',
    a: 'Gimme is a platform that brings your customer-facing storefront, orders, loyalty and everyday operations together — and adapts to the type of business you run.',
    href: '/platform',
  },
  {
    q: 'Which businesses can use Gimme?',
    a: 'Restaurants, cafés, bakeries, bars, catering companies and retailers use ordering and loyalty today. Bookings for salons, studios and gyms are in development.',
    href: '/industries/restaurants',
  },
  {
    q: 'How does Gimme AI work?',
    a: 'Gimme AI is in development. It is designed to prepare drafts — content, menus, answers — that you review and approve before anything goes live.',
    href: '/features/ai',
  },
  {
    q: 'Can customers order without downloading an app?',
    a: 'Yes. Storefronts open in any browser from a link or QR code.',
    href: '/features/digital-storefronts',
  },
  {
    q: 'How does Gimme help with customer loyalty?',
    a: 'Customers earn points with each order and see their progress and ready rewards in the Gimme wallet.',
    href: '/features/loyalty',
  },
  {
    q: 'Does Gimme support online payments?',
    a: 'Payment options depend on your setup and region. We will walk you through what is available for your business in a demo.',
    href: '/demo',
  },
  {
    q: 'Can Gimme integrate with my existing systems?',
    a: 'Tell us what you use today in a demo and we will be honest about what connects and what does not yet.',
    href: '/demo',
  },
  {
    q: 'How can I get started?',
    a: 'Book a demo. We will look at how your business works and set up a store that fits it.',
    href: '/demo',
  },
]

export const getFeature = (slug: string) => features.find((f) => f.slug === slug)
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug)
