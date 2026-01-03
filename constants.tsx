
import { Speaker, WorkshopDay, GalleryImage } from './types';

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Dr. K.V.V Satyanarayana Raju',
    role: 'Chairman & Founder',
    institution: 'Chaitanya Group',
    image: 'https://picsum.photos/seed/doc1/400/500'
  },
  {
    id: '2',
    name: 'Dr. Anand Acharya',
    role: 'Dean & Principal',
    institution: 'KIMS & RF',
    image: 'https://picsum.photos/seed/doc2/400/500'
  },
  {
    id: '3',
    name: 'Dr. Sachidhananda Moorty',
    role: 'Organising Chairman',
    institution: 'SMARC',
    image: 'https://picsum.photos/seed/doc3/400/500'
  },
  {
    id: '4',
    name: 'Dr. Renu Sulakhe',
    role: 'Scientific Committee Incharge',
    institution: 'KIMS',
    image: 'https://picsum.photos/seed/doc4/400/500'
  }
];

export const WORKSHOP_DAYS: WorkshopDay[] = [
  {
    id: 1,
    label: 'Day 1',
    mom: [
      {
        title: 'Basic Surgical Skills (BSS)',
        time: '09:00 AM - 12:00 PM',
        speaker: 'Dr. John Doe',
        description: 'Hands-on training for gloving, gowning, and suturing on pig skin models.'
      },
      {
        title: 'Inaugural Session',
        time: '02:00 PM - 04:00 PM',
        speaker: 'Dr. Raju',
        description: 'Opening ceremony and vision for SMARC 2026.'
      }
    ]
  },
  {
    id: 2,
    label: 'Day 2',
    mom: [
      {
        title: 'Ophthalmology Hands-on',
        time: '10:00 AM - 01:00 PM',
        speaker: 'Dr. Jane Smith',
        description: 'Cataract surgery simulation on goat eyes and fundus examination basics.'
      },
      {
        title: 'BPCS & Murmurs',
        time: '02:00 PM - 05:00 PM',
        speaker: 'Dr. Emily Watson',
        description: 'Clinical understanding of heart sounds, murmurs, and biopsy processing.'
      }
    ]
  },
  {
    id: 3,
    label: 'Day 3',
    mom: [
      {
        title: 'Obstetrics & Gynaecology',
        time: '09:00 AM - 12:00 PM',
        speaker: 'Dr. Sarah Parker',
        description: 'D&C procedures, IUCD insertion, and normal vaginal delivery simulations.'
      },
      {
        title: 'Valedictory Function',
        time: '04:00 PM - 06:00 PM',
        speaker: 'Organizing Committee',
        description: 'Award distribution for scientific papers and closing remarks.'
      }
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: 'https://picsum.photos/seed/gall1/800/600', caption: 'Inauguration Ceremony' },
  { url: 'https://picsum.photos/seed/gall2/800/600', caption: 'Surgical Workshop' },
  { url: 'https://picsum.photos/seed/gall3/800/600', caption: 'Paper Presentation' },
  { url: 'https://picsum.photos/seed/gall4/800/600', caption: 'Cultural Night' },
  { url: 'https://picsum.photos/seed/gall5/800/600', caption: 'Poster Session' },
  { url: 'https://picsum.photos/seed/gall6/800/600', caption: 'Medical Quiz' },
];
