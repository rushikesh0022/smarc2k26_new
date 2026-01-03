
export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  image: string;
}

export interface WorkshopContent {
  title: string;
  time: string;
  speaker: string;
  description: string;
}

export interface WorkshopDay {
  id: number;
  label: string;
  mom: WorkshopContent[];
}

export interface GalleryImage {
  url: string;
  caption: string;
}
