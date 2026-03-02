export interface SeoLandingPageProps {
  location: string;
  hero: {
    heading: string; // H1
    subheading: string;
    ctaText: string;
    ctaLink: string;
    imageUrl: string;
    imageAlt: string;
  };
  stats: {
    title: string; // H2
    data: { value: string; label: string }[];
  };
  services: {
    title: string; // H2
    items: { title: string; description: string; icon?: React.ReactNode }[]; // H3
  };
  cities: {
    title: string; // H2
    list: string[]; // H3 equivalents in grid
  };
  faqs: {
    title: string; // H2
    items: { question: string; answer: string }[];
  };
  conversion: {
    title: string; // H2
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}
