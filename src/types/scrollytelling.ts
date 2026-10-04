export interface ActItem {
  id: string;
  actNumber: number; // 0, 1, 2, ...
  year: string;      // "2020", "2021", etc.
  tagline: string;   // Secondary atmospheric subtitle or phrase
  narrative: string[]; // Deep editorial paragraphs
  contextNotes?: string;
  quote?: {
    text: string;
    author: string;
  };
  albumOrWork?: {
    title: string;
    releaseDate?: string;
    format?: string;
  };
  image: {
    url: string;
    caption: string;
    blendMode?: 'normal' | 'screen' | 'lighten' | 'overlay' | 'luminosity';
  };
  accentColor: string; // e.g. '#9c442b' (clay), '#324035' (moss)
}
