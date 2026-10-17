export type Post = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readMinutes: number
  author: { name: string; role: string }
  related: { label: string; href: string }[]
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
}

const team = { name: 'Gimme Team', role: 'Product & Editorial' }

export const posts: Post[] = [
  {
    slug: 'ai-reduce-admin-small-business',
    title: 'Where AI actually saves time in a small business',
    description:
      'A practical look at which admin tasks are good candidates for AI assistance, and which should stay firmly in human hands.',
    category: 'AI for Business',
    date: '2026-09-22',
    readMinutes: 6,
    author: team,
    related: [
      { label: 'Gimme AI', href: '/features/ai' },
      { label: 'Operations', href: '/features/operations' },
    ],
    sections: [
      {
        heading: 'Start with the repetitive, not the important',
        paragraphs: [
          'The best first jobs for AI are tasks you do often, that follow a pattern, and where a first draft is useful even if it is not perfect. Writing product descriptions, organising a menu into categories, or answering the same opening-hours question for the fifth time today are all good examples.',
          'Decisions that carry real consequences, such as changing prices, refunding a customer or cancelling an appointment, are poor candidates for automation. AI can prepare them, but a person should confirm them.',
        ],
      },
      {
        heading: 'A simple test for any task',
        paragraphs: ['Before handing something to an assistant, ask three questions:'],
        bullets: [
          'Would a draft save me time even if I edit half of it?',
          'Can I check the result quickly?',
          'Is it easy to undo if something is wrong?',
        ],
      },
      {
        heading: 'Keep approval in the loop',
        paragraphs: [
          'The goal is not a business that runs itself. It is a business where you spend your attention on customers and craft instead of copy-pasting. Tools that show you exactly what will change, and wait for your go-ahead, earn trust far faster than tools that act silently.',
        ],
      },
    ],
  },
  {
    slug: 'simplify-restaurant-online-ordering',
    title: 'How restaurants can simplify online ordering',
    description:
      'Fewer tablets, fewer phone calls and one queue for the kitchen. A checklist for tidying up how orders reach your team.',
    category: 'Restaurant Technology',
    date: '2026-09-08',
    readMinutes: 5,
    author: team,
    related: [
      { label: 'Restaurants', href: '/industries/restaurants' },
      { label: 'Online Ordering', href: '/features/online-ordering' },
    ],
    sections: [
      {
        heading: 'Count your order channels',
        paragraphs: [
          'Walk through a busy evening and list every way an order reaches the kitchen: the phone, a tablet per delivery partner, a paper pad at the counter, messages on social media. Each channel is another place for something to be missed.',
        ],
      },
      {
        heading: 'Bring them into one queue',
        paragraphs: [
          'Whatever tools you choose, the kitchen should see a single list in the order things need to be cooked. That one change does more for a calm service than any new feature.',
        ],
        bullets: ['One storefront link for takeaway and dine-in', 'One kitchen view', 'Status updates the customer can see'],
      },
      {
        heading: 'Let customers help themselves',
        paragraphs: [
          'When customers can see that their order is being prepared, they stop calling to ask. Live order status is a small detail that removes a surprising number of interruptions.',
        ],
      },
    ],
  },
  {
    slug: 'customer-loyalty-without-complicated-software',
    title: 'Building customer loyalty without complicated software',
    description:
      'Loyalty programmes work when they are easy to understand. Here is how to design one your regulars will actually use.',
    category: 'Customer Loyalty',
    date: '2026-08-19',
    readMinutes: 4,
    author: team,
    related: [
      { label: 'Loyalty & Rewards', href: '/features/loyalty' },
      { label: 'Cafés', href: '/industries/cafes' },
    ],
    sections: [
      {
        heading: 'One reward, clearly explained',
        paragraphs: [
          'The most effective programmes fit on a coffee cup: every order earns points, reach the goal, get a reward. Tiers, multipliers and expiry rules can come later, if ever.',
        ],
      },
      {
        heading: 'Show progress',
        paragraphs: [
          'People are motivated by visible progress. A ring that fills up, or a counter that says one more visit to go, does more than a points balance on its own.',
        ],
      },
      {
        heading: 'Make redemption effortless',
        paragraphs: [
          'If claiming a reward requires asking staff or finding a card, many customers will not bother. Rewards should be visible and usable at checkout.',
        ],
      },
    ],
  },
  {
    slug: 'manage-weekly-catering-menus',
    title: 'How to manage weekly catering menus efficiently',
    description:
      'From planning dishes to production lists: a calmer workflow for catering teams that cook to pre-order.',
    category: 'Catering Management',
    date: '2026-08-04',
    readMinutes: 5,
    author: team,
    related: [
      { label: 'Catering', href: '/industries/catering' },
      { label: 'Catering & Weekly Menus', href: '/features/catering' },
    ],
    sections: [
      {
        heading: 'Plan the week in one sitting',
        paragraphs: [
          'Setting the whole week of menus at once lets you balance ingredients across days and gives customers time to pre-order.',
        ],
      },
      {
        heading: 'Close orders before you shop',
        paragraphs: [
          'A clear ordering cut-off turns uncertain demand into known quantities. Purchase and prep from totals rather than estimates.',
        ],
      },
      {
        heading: 'Produce from a single list',
        paragraphs: ['Your kitchen needs one number per dish per day. Everything else is noise during production.'],
        bullets: ['Totals per dish', 'Grouped by delivery or pickup time', 'Notes for allergies and special requests'],
      },
    ],
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
