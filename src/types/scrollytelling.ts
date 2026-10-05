export interface ArchiveLink { label: string; url: string }

export interface ArchiveImage {
  src: string;
  srcSet: string;
  originalUrl: string;
  source: ArchiveLink;
  width: number;
  height: number;
  alt: string;
  caption: string;
  position?: string;
  blendMode?: 'normal' | 'luminosity' | 'overlay';
}

export interface ActItem {
  id: `acto-${number}`;
  actNumber: number;
  year: '2020' | '2021' | '2023' | '2024' | '2025' | '2026';
  label: string;
  tagline: string;
  narrative: string[];
  contextNotes?: string;
  quote?: { text: string; author: string; source: ArchiveLink };
  albumOrWork?: { title: string; releaseDate: string; format: string; url: string };
  image: ArchiveImage;
  companionImage?: ArchiveImage;
  sources: ArchiveLink[];
  accentColor: string;
  motif: 'mist' | 'room' | 'roots' | 'electric' | 'mycelium' | 'live' | 'reconstituted' | 'epilogue';
}
