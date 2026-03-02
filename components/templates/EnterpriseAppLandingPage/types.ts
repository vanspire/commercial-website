export interface EnterpriseAppLandingPageProps {
  location: string;
  hero: {
    heading: string;
    subheading: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
  };
  showcase: {
    metrics: { label: string; value: string }[];
    features: { title: string; description: string }[];
  };
  techStack: {
    title: string;
    categories: {
      name: string;
      technologies: { name: string; iconPath: string; tooltip: string }[];
    }[];
  };
  architecture: {
    title: string;
    description: string;
    features: { title: string; description: string }[];
  };
  bentoFeatures: {
    title: string;
    items: {
      title: string;
      description: string;
      span: number; // 1 or 2 to span columns
    }[];
  };
  timeline: {
    title: string;
    steps: { phase: string; title: string; description: string }[];
  };
  solutions: {
    title: string;
    outcomes: { title: string; description: string }[];
    industries: { name: string; description: string }[];
  };
  security: {
    title: string;
    description: string;
    items: { title: string; highlight: string }[];
  };
  coverage: {
    title: string;
    description: string;
    cities: string[];
  };
  conversion: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
}
