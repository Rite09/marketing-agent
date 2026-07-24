import {
  BarChart3,
  BriefcaseBusiness,
  FilePenLine,
  Gauge,
  LayoutTemplate,
  LineChart,
  MapPinned,
  Megaphone,
  MessageCircleMore,
  MessageSquareText,
  MonitorSmartphone,
  Palette,
  PencilRuler,
  Presentation,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Waypoints,
  Workflow,
  Wrench,
} from "lucide-react";

export const featuredPrograms = [
  {
    icon: Search,
    tag: "Most Popular",
    title: "Search Engine Optimization",
    description:
      "Rank higher and capture buyers actively searching for what you sell.",
  },
  {
    icon: Sparkles,
    tag: "High ROI",
    title: "Google & Meta Ads",
    description:
      "Performance campaigns engineered for cost-efficient, predictable leads.",
  },
  {
    icon: MonitorSmartphone,
    tag: "New",
    title: "Website & Landing Pages",
    description:
      "Fast, beautiful sites and high-converting pages built to grow revenue.",
  },
  {
    icon: Palette,
    tag: "Featured",
    title: "Branding & Creatives",
    description:
      "Distinctive identity and scroll-stopping ad creatives that perform.",
  },
];

export const servicePills = [
  "Digital Marketing",
  "Branding & Creative",
  "Website & Technical",
  "Lead Generation & Sales",
  "Local & Business Profile",
  "Analytics & Reporting",
  "Strategy & Consulting",
  "Specialized Services",
];

export const programs = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    icon: Megaphone,
    description: "Reach the right audience and turn attention into pipeline.",
    items: [
      {
        icon: Send,
        title: "Social Media Marketing",
        description: "Instagram, Facebook & LinkedIn management.",
      },
      {
        icon: Search,
        title: "Search Engine Optimization (SEO)",
        description: "Higher rankings, more qualified traffic.",
      },
      {
        icon: Sparkles,
        title: "Pay-Per-Click (PPC)",
        description: "Google Ads & Meta Ads built for ROI.",
      },
      {
        icon: MessageCircleMore,
        title: "Email Marketing",
        description: "Campaigns, newsletters & automation.",
      },
      {
        icon: FilePenLine,
        title: "Content Marketing",
        description: "Blogs, posts and video that compounds.",
      },
    ],
  },
  {
    id: "branding-creative",
    label: "Branding & Creative",
    icon: Palette,
    description: "A brand people remember - and creatives that convert.",
    items: [
      {
        icon: Sparkles,
        title: "Logo Design",
        description: "Distinctive marks that scale across channels.",
      },
      {
        icon: FilePenLine,
        title: "Brand Identity",
        description: "Colors, fonts and complete guidelines.",
      },
      {
        icon: Presentation,
        title: "Social & Ad Creatives",
        description: "Scroll-stopping visuals built to perform.",
      },
      {
        icon: PencilRuler,
        title: "Packaging Design",
        description: "On-shelf design that earns attention.",
      },
    ],
  },
  {
    id: "website-technical",
    label: "Website & Technical",
    icon: MonitorSmartphone,
    description: "Fast, modern websites engineered to grow your business.",
    items: [
      {
        icon: MonitorSmartphone,
        title: "Website Design & Development",
        description: "Custom builds tailored to your goals.",
      },
      {
        icon: LayoutTemplate,
        title: "Landing Page Creation",
        description: "Lead-gen pages designed to convert.",
      },
      {
        icon: Gauge,
        title: "Website Optimization",
        description: "Speed, UX/UI and Core Web Vitals.",
      },
    ],
  },
  {
    id: "lead-generation",
    label: "Lead Generation & Sales",
    icon: Target,
    description: "From cold audience to closed customer - a full funnel approach.",
    items: [
      {
        icon: Target,
        title: "Lead Generation Campaigns",
        description: "Multi-channel campaigns for qualified leads.",
      },
      {
        icon: Waypoints,
        title: "Funnel Creation",
        description: "Awareness to consideration to conversion.",
      },
      {
        icon: BriefcaseBusiness,
        title: "CRM Setup & Integration",
        description: "Capture, track and nurture every lead.",
      },
      {
        icon: TrendingUp,
        title: "Conversion Rate Optimization",
        description: "Test, learn, lift conversion month over month.",
      },
    ],
  },
  {
    id: "local-business-profile",
    label: "Local & Business Profile",
    icon: MapPinned,
    description: "Show up where local customers search and choose you.",
    items: [
      {
        icon: MapPinned,
        title: "Google Business Profile",
        description: "Optimized listings that rank in maps.",
      },
      {
        icon: Users,
        title: "Local SEO",
        description: "Win 'near me' searches in your area.",
      },
      {
        icon: ShieldCheck,
        title: "Reviews & Reputation",
        description: "Earn, manage and respond - at scale.",
      },
    ],
  },
  {
    id: "analytics-reporting",
    label: "Analytics & Reporting",
    icon: BarChart3,
    description: "Make every dollar accountable with clean, honest data.",
    items: [
      {
        icon: BarChart3,
        title: "Monthly Performance Reports",
        description: "Clear KPIs, no fluff.",
      },
      {
        icon: LineChart,
        title: "Data Analysis",
        description: "Insights that drive next-month improvements.",
      },
      {
        icon: Gauge,
        title: "Dashboard Creation",
        description: "Looker Studio, Power BI & Excel.",
      },
    ],
  },
  {
    id: "strategy-consulting",
    label: "Strategy & Consulting",
    icon: Wrench,
    description: "Senior strategy that gives your marketing a clear direction.",
    items: [
      {
        icon: Target,
        title: "Market Research",
        description: "Audience, demand and opportunity sizing.",
      },
      {
        icon: Users,
        title: "Competitor Analysis",
        description: "Where to differentiate, where to attack.",
      },
      {
        icon: Sparkles,
        title: "Go-To-Market Strategy",
        description: "Launch plans built to gain traction fast.",
      },
      {
        icon: MessageSquareText,
        title: "Marketing Planning",
        description: "Budgets, channels and quarterly roadmaps.",
      },
    ],
  },
  {
    id: "specialized-services",
    label: "Specialized Services",
    icon: Sparkles,
    description: "Specialized capabilities for when you're ready to scale.",
    items: [
      {
        icon: Users,
        title: "Influencer Marketing",
        description: "Creators that move your audience.",
      },
      {
        icon: Video,
        title: "Video Production & Editing",
        description: "Short-form & long-form that converts.",
      },
      {
        icon: Waypoints,
        title: "Affiliate Marketing",
        description: "Performance partnerships at scale.",
      },
      {
        icon: Workflow,
        title: "Marketing Automation",
        description: "Workflows that work while you sleep.",
      },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Audit, goals, KPIs, audience and competitors.",
  },
  {
    number: "02",
    title: "Design",
    description: "Channel mix, budgets, creative direction, tracking plan.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Launch campaigns, content and tracking. Iterate fast.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Weekly insights and continuous optimization.",
  },
];
