export type CaseItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  industry: string;
  categories: string[];
  clientId: string;
  featured: boolean;
  status: "draft" | "published";

  media: {
    thumbnail: string;
    cover: string;
  };

  meta: {
    year: number;
    duration: string;
    impact: string;
  };
};

export type FilterOption = {
  id: string;
  label: string;
};

export type Client = {
  id: string;
  name: string;
  logo: string;
};
