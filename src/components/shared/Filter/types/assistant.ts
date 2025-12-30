export interface Assistant {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  maxRating: number;
  skills: string[];
  languages: string[];
  rate: number;
  available: boolean;
  remote: boolean;
  location?: string;
  industry?: string;
  title: string;
}

export interface FilterOptions {
  searchQuery: string;
  location: string;
  skills: string[];
  languages: string[];
  availability: string;
  sortBy: string;
}