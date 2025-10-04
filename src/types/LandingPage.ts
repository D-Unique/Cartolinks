export type TimelineCardProps = {
    date?: string;
    title?: string; 
    description?: string;
    imageUrl?: string;
    cta?: { text: string; link: string };
};

export type PreFooterCardProps = {
    imageurl: string
    text: string
    cta: { text: string; link: string };
};

export type mileStoneProps = {
  date?: string;
  title: string;
  description: string;
  imageUrl?: string;
  cta?: { link: string; text: string };
};

export type FooterLink = {
  text: string;
  link?: string;
  icon?: React.ElementType;
};

export type FooterLinkGroup = {
  heading: string;
  links: FooterLink[];
};
