export type Category = "Product sense" | "UX" | "Teardown" | "Growth";

export interface Post {
  id: string;
  tag: Category;
  title: string;
  dek: string;
  date: string;
  mins: string;
  /** Placeholder caption until a real image is added. */
  img: string;
  /** Opening paragraph; its first letter is rendered as a drop cap. */
  lead: string;
  /** Paragraphs before the pull quote. */
  body: string[];
  quote: string;
  /** Paragraphs after the pull quote. */
  body2: string[];
  takeaways: string[];
  toc: string[];
}

export const CATEGORIES: ("All" | Category)[] = ["All", "Product sense", "UX", "Teardown", "Growth"];

export const POSTS: Post[] = [
  {
    "id": "grab",
    "tag": "Product sense",
    "title": "From ride-sharing royalty to humble pedestrian",
    "dek": "How Grab in Ho Chi Minh City and ride apps in Germany are built for completely different lifestyles.",
    "date": "Oct 5, 2026",
    "mins": "6 min",
    "img": "photo — HCMC traffic vs. a German tram stop",
    "lead": "Living in the chaotic beauty of Ho Chi Minh City, I was glued to Grab, Be, and Gojek every single day. It was not just about convenience. It was a lifestyle. Too lazy to decide what to eat? Order it. Want to cook something fancy but cannot be bothered with the 15 ingredients? Order it. A lazy morning meant booking a Grab with my monthly subscription, and suddenly everything felt less effortful, less stressful.",
    "body": [
      "And if you have ever lived in HCMC, you know the traffic situation. Morning rush? Nightmare. After work? Absolute chaos. No joke. 🙂",
      "But then I moved to Germany at the end of 2023.",
      "And the habit completely flipped on its head. Living in a small city, surrounded by my lovely uni friends, I somehow forgot that similar apps even exist here. Suddenly, I was learning the ancient art of planning ahead and using public transport like a responsible adult. Wild concept.",
      "In Germany, I believe most people do not casually book a ride because they are feeling a bit lazy. You check the bus schedule. You memorize tram routes. You might even, brace yourself, walk. And for the rest of the team, they probably have cars. I went from ride-sharing royalty to a humble pedestrian, getting a few layers in winter because it is super cold here and I actually have to go outside now.",
      "And food delivery? Forget the endless options I had back home. I know the comparison is a bit unfair, as my homeland is well known for its cuisine, but I really do miss having my 1 AM cravings solved in 20 minutes. Now I actually have to cook everyday, which made me realize I might be qualified for MasterChef. The audacity. Hopefully not everyone is like me, so we can still contribute to economic growth in some way.",
      "Sarcasm aside, it has been a real adjustment. My whole rhythm changed. Less spontaneous, more planned. Less \"let us grab a ride real quick\" more \"the next train is in 12 minutes, better hurry.\" Germany taught me a kind of discipline I did not ask for, but at least the trains are sometimes on time. Still good.",
      "Now let us talk about how these apps differ here compared to Vietnam.",
      "Honestly, the whole vibe is just different. In Vietnam, Grab and its competitors are considered super apps with all-in-one life solutions: rides, food, groceries, insurance, and more. It was not just an app but more was part of daily life as they aim for. In Germany, Uber exists, but it feels more like something you use occasionally rather than your daily go-to. Or at least, I know no one who actually uses it daily.",
      "Another big difference is availability. Back home, rides were everywhere. You opened the app and a driver appeared almost instantly. In Germany, you open the app, wait a bit, check the price twice, and then seriously reconsider whether you really need that ride or if walking builds character. Spoiler: it always does.",
      "Food delivery follows the same pattern. In Vietnam, the choices felt endless: local spots, street vendors, \"Hu Tieu night\" that somehow stayed open until 4 AM. In Germany, the selection feels more limited and practical, but I cannot complain. Options are still available, but they do not tempt you in the same way.",
      "At the end of the day, it is not about which system is better. They are designed for completely different lifestyles. Vietnam is built for speed, flexibility, and convenience in chaos. Germany is built for predictability, structure, and planning. One lets you live on impulse. The other quietly teaches you patience, whether you asked for it or not.",
      "And somewhere between missing my Grab subscription and memorizing Deutsch Bahn schedules, I am slowly learning how to live in both worlds."
    ],
    "quote": "One lets you live on impulse. The other quietly teaches you patience, whether you asked for it or not.",
    "body2": [
      "Another thing I started noticing here in Germany, and maybe Europe in general after a few trips, is that a large number of people already have a driver's license. Because of that, these apps adapt differently. Instead of focusing only on rides, they add features like car rental or pick-up services. In that sense, it makes a lot of sense. The market is different, so the product has to be different too.",
      "You are not relying on a driver to take you from point A to point B. You are trusted with the car itself. That alone changes the whole relationship between the user and the platform. It shifts from convenience on demand to temporary ownership (my professor said that), even if just for an hour or two.",
      "At the same time, this is where things get tricky. How do you make sure it works properly? How do you manage safety, responsibility, and risk when it is not a traditional car rental setup? There is no counter, no long contract, no face-to-face handover. Just an app, a location, scan of your driver’s license and a lot of trust. Making that system reliable is not just a design problem but I feel like it’s a math problem too. Risk calculation, insurance models, user behavior, damage prediction. All of that has to work quietly in the background.",
      "So while ride-hailing apps in Vietnam solved the problem of moving fast in chaos, the European versions seem to be solving a different equation. Fewer impulsive rides, more planned mobility. Less about speed, more about trust. And honestly, seeing how the same idea evolves to fit such different lifestyles is probably the most interesting part of the comparison.",
      "That’s enough for today, thank you."
    ],
    "takeaways": [
      "Vietnam is built for speed, flexibility, and convenience in chaos.",
      "Germany is built for predictability, structure, and planning.",
      "The market is different, so the product has to be different too."
    ],
    "toc": [
      "Life on Grab in HCMC",
      "Moving to Germany",
      "How the apps differ",
      "Trusted with the car"
    ]
  },
  {
    "id": "onboard",
    "tag": "Teardown",
    "title": "The first 60 seconds: what Duolingo-style onboarding gets right",
    "dek": "Letting people do the thing before asking who they are is a product decision, not a UI trick.",
    "date": "Oct 2, 2026",
    "mins": "9 min",
    "img": "screenshot collage — onboarding screens",
    "lead": "The best onboarding flows I have used share one habit: they postpone the sign-up form until you already care about what is behind it.",
    "body": [
      "Most apps ask for your email on screen one because the growth team needs an identifier. That is a reasonable business need, but it is the user paying for it with attention they have not yet decided to give.",
      "When the first screen is a tiny win instead, the question changes from \"should I make an account?\" to \"do I want to keep this progress?\" The second question is much easier to say yes to."
    ],
    "quote": "Earn the sign-up form. Don’t lead with it.",
    "body2": [
      "The cost is real: you carry anonymous state, you lose some attribution, and engineering has to merge accounts later. I still think it is worth it for most consumer products."
    ],
    "takeaways": [
      "Show value before you ask for identity.",
      "Turn sign-up into saving progress.",
      "Budget engineering time for anonymous-to-account merges."
    ],
    "toc": [
      "Screen one",
      "The sign-up question",
      "What it costs"
    ]
  },
  {
    "id": "empty",
    "tag": "Product sense",
    "title": "Empty states are your real homepage",
    "dek": "For a new user, the screen with nothing on it is the product.",
    "date": "Sep 24, 2026",
    "mins": "6 min",
    "img": "screenshot — blank dashboard",
    "lead": "Every product team polishes the full dashboard, the one in the marketing screenshots. Almost no new user ever sees it.",
    "body": [
      "What they see is the empty version: zero projects, zero teammates, a grey illustration and a button. That screen is doing the heavy lifting of explaining what the product is for.",
      "A good empty state answers three things: what goes here, why I would want it, and the single fastest way to get there."
    ],
    "quote": "Design the zero state first. Everything else is a later day.",
    "body2": [
      "Templates, sample data and one obvious action beat a friendly illustration every time."
    ],
    "takeaways": [
      "New users live in empty states.",
      "Answer what, why and how-fast.",
      "Sample data beats illustrations."
    ],
    "toc": [
      "The screenshot lie",
      "Three questions",
      "Patterns that work"
    ]
  },
  {
    "id": "settings",
    "tag": "UX",
    "title": "Every settings toggle is a decision you didn’t make",
    "dek": "Preferences pages tell you where a team couldn’t agree.",
    "date": "Sep 15, 2026",
    "mins": "7 min",
    "img": "screenshot — long settings page",
    "lead": "Open the settings page of any mature app and you can read its history of internal arguments.",
    "body": [
      "Each toggle is usually a compromise: two people wanted different behaviour, so both shipped and the user got to pick. That feels respectful but mostly it moves the work to someone with less context.",
      "Strong products pick a default, watch what happens, and only add the toggle when real users keep asking."
    ],
    "quote": "A toggle is often a meeting that never ended.",
    "body2": [
      "The fastest audit: for each setting, ask what percentage of people ever change it. Under one percent is a candidate for deletion."
    ],
    "takeaways": [
      "Settings reveal unmade decisions.",
      "Ship opinionated defaults.",
      "Audit toggles by usage."
    ],
    "toc": [
      "Reading the history",
      "Defaults over options",
      "The 1% audit"
    ]
  },
  {
    "id": "search",
    "tag": "Teardown",
    "title": "Why command palettes took over web apps",
    "dek": "Cmd+K went from a power-user trick to a standard pattern in five years.",
    "date": "Sep 3, 2026",
    "mins": "8 min",
    "img": "screenshot — command palette open",
    "lead": "There was a moment when every app I opened suddenly had a little search box that also did everything.",
    "body": [
      "Command palettes solve a real scaling problem: navigation menus can only hold so much before they become a maze.",
      "They also teach. Every result shows its keyboard shortcut, so the palette quietly trains people to stop needing it."
    ],
    "quote": "The best palette makes itself unnecessary.",
    "body2": [
      "The risk is hiding everything behind a box nobody knows exists. The palette should be an accelerator, never the only door."
    ],
    "takeaways": [
      "Palettes scale where menus break.",
      "Show shortcuts to teach them.",
      "Never make it the only path."
    ],
    "toc": [
      "Menus that broke",
      "Teaching by doing",
      "Where it goes wrong"
    ]
  },
  {
    "id": "friction",
    "tag": "Product sense",
    "title": "Good friction: when slowing people down helps",
    "dek": "Not every extra step is a conversion leak.",
    "date": "Aug 22, 2026",
    "mins": "5 min",
    "img": "screenshot — confirm delete dialog",
    "lead": "We treat friction as the enemy, but some of my favourite product moments are deliberately slow.",
    "body": [
      "Typing the repository name before deleting it. A pause before sending money. A preview before publishing. Each step costs a second and saves a very bad afternoon.",
      "The rule I use: add friction in proportion to how hard the action is to undo."
    ],
    "quote": "Friction should scale with how hard it is to undo.",
    "body2": [
      "Everything reversible should be instant. Everything permanent deserves a beat."
    ],
    "takeaways": [
      "Match friction to reversibility.",
      "Make reversible actions instant.",
      "Give permanent ones a pause."
    ],
    "toc": [
      "Slow on purpose",
      "The undo rule",
      "Examples"
    ]
  },
  {
    "id": "notif",
    "tag": "Growth",
    "title": "Notifications are a trust budget",
    "dek": "Every ping spends a little. Most apps are overdrawn.",
    "date": "Aug 10, 2026",
    "mins": "6 min",
    "img": "screenshot — lock screen full of pings",
    "lead": "Every push notification is a withdrawal from an account the user never told you the balance of.",
    "body": [
      "Teams measure open rates per notification, which always look fine in isolation. What they rarely measure is the slow drift toward \"turn off all\".",
      "Treat notifications like a budget: decide how many a week a person should get, then make each one compete for a slot."
    ],
    "quote": "Measure the opt-outs, not just the opens.",
    "body2": [
      "When notifications are scarce, they get read. That is the whole trick."
    ],
    "takeaways": [
      "Track opt-out rate as a core metric.",
      "Set a weekly notification budget.",
      "Scarcity makes pings valuable."
    ],
    "toc": [
      "The hidden balance",
      "Budgeting pings",
      "What to cut"
    ]
  }
];

/** Card tilt in degrees, by post index — the feed's "scattered on a desk" look. */
const TILTS = [-2, 1.5, -1, 2, -1.5, 1];
export const tiltFor = (index: number) => TILTS[index % TILTS.length];

/** Category sticker colour alternates orange / pink, by post index. */
export const stickerColorFor = (index: number) => (index % 2 ? "var(--pink)" : "var(--orange)");

/** Seed like count shown before a reader taps (placeholder until likes are stored). */
export const baseLikesFor = (index: number) => 12 + index * 7;

export const postPath = (post: Post) => `/essays/${post.id}`;
