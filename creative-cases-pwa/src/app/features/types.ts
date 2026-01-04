export type CaseItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  industry: string;
  categories: string[];
  clientId: string;
  featured: boolean;
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
