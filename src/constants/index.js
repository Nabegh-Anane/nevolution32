import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Gaming Streams",
    url: "#streams",
  },
  {
    id: "1",
    title: "Videos",
    url: "#videos",
  },
  {
    id: "2",
    title: "Social Media",
    url: "#social-media",
  },
  {
    id: "3",
    title: "Contact NEvolution32",
    url: "#contact",
  },
  {
    id: "4",
    title: "Games",
    url: "#games",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "UGC Gaming",
    url: "#nevolution32",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "UGC Gaming Content Creation",
  "Live Streaming Gameplay",
  "Daily Game Discovery Videos",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "New Story Mode Videos",
    text: "Creating captivating story mode walkthroughs for popular games.",
    date: "October 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Multiplayer Online Gameplay",
    text: "Streaming online matches and multiplayer gameplays for viewers to enjoy.",
    date: "October 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Game Discovery Series",
    text: "Highlighting new and underrated games through dedicated video series.",
    date: "October 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Community Integration",
    text: "Expanding community engagement through Discord and social platforms.",
    date: "October 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Collaborate with NEvolution32 to boost your gaming content on multiple platforms, utilizing automation and a seamless integration approach.";

export const collabContent = [
  {
    id: "0",
    title: "Gaming Content Collaboration",
    text: collabText,
  },
  {
    id: "1",
    title: "Streaming & Video Content",
  },
  {
    id: "2",
    title: "Social Media Outreach",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter Pack",
    description: "Basic Gaming Content Creation & Sharing",
    price: "Free",
    features: [
      "Stream highlights from live games on Twitch and YouTube",
      "Share gameplay clips on Instagram, Twitter, and Facebook",
      "Basic video editing with simple transitions and cuts",
      "Cross-platform content scheduling",
    ],
  },
  {
    id: "1",
    title: "Pro Gamer Pack",
    description: "Advanced Gameplay Content & Collaboration",
    price: "14.99",
    features: [
      "Full-game walkthroughs and story-mode content creation",
      "Advanced video editing, including effects and overlays",
      "Collaborate with other streamers for multiplayer content",
      "In-depth game reviews and reactions shared across platforms",
      "Priority content scheduling and cross-platform analytics",
    ],
  },
  {
    id: "2",
    title: "Elite Creator Pack",
    description: "Custom Gaming Content & Exclusive Access",
    price: "29.99",
    features: [
      "Custom content creation for game developers and promotions",
      "Exclusive behind-the-scenes content and gameplay tips",
      "Dedicated social media strategy for game launches",
      "In-depth analytics and audience engagement reports",
      "Exclusive access to NEvolution32's private gaming community",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "Engage with the Community",
    text: "Connect with gamers worldwide through live streams and shared experiences.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Learn New Games",
    text: "Discover new games and story modes with tips and walkthroughs.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect Across Platforms",
    text: "Share gaming content easily across multiple social media platforms.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast Gaming Updates",
    text: "Stay updated on the latest game releases and gaming trends.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/channels/1255172790861168650/1255172790861168652",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/nevolution32",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/nevolution32/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://www.twitch.tv/nevolution32",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/nevolution32",
  },
];
