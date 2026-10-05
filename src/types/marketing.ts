export interface ActionLink {
  label: string;
  href: string;
}

export interface MarketingMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface MarketingSection {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  points?: { title: string; description: string }[];
  media?: MarketingMedia;
  action?: ActionLink;
}

export interface SiteContent {
  brand: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: ActionLink;
    secondaryAction?: ActionLink;
    visualLabel: string;
    media?: MarketingMedia;
  };
  sections: MarketingSection[];
  contact: {
    id: string;
    navLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    action: ActionLink;
  };
  footer: string;
}
