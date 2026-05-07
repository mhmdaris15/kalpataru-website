import { IMG } from './images';

export type CultureCard = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  word: string; // Indonesian word/phrase
  meaning: string;
};

export const CULTURE_CARDS: CultureCard[] = [
  {
    id: 'wayang',
    title: 'Wayang',
    subtitle: 'Shadows of Java',
    word: 'wayang kulit',
    meaning: 'shadow puppetry of leather and lamp-light',
    body: 'A thousand-year-old art form where leather puppets cast moving stories on a translucent screen. At Kalpataru, the wayang on our walls watches over every meal — silent narrators of an ancient cuisine.',
    image: IMG.wayang,
  },
  {
    id: 'bali',
    title: 'Bali',
    subtitle: 'The Island of Offerings',
    word: 'canang sari',
    meaning: 'small daily offerings of flowers and rice',
    body: 'Every morning across Bali, woven palm-leaf trays bloom with marigold and frangipani. Our cooking carries the same intention — that food itself is an offering, prepared with care.',
    image: IMG.windowTree,
  },
  {
    id: 'java',
    title: 'Java',
    subtitle: 'Where Spice Meets Smoke',
    word: 'rasa',
    meaning: 'taste — but also feeling, soul, presence',
    body: 'Javanese cooking moves slowly. Sambal pounded by hand, kecap manis darkening over hours. We honor that pace because rasa cannot be rushed.',
    image: IMG.printedMenu,
  },
  {
    id: 'kalpataru',
    title: 'Kalpataru',
    subtitle: 'The Wish-Fulfilling Tree',
    word: 'kalpataru',
    meaning: 'tree of life and abundance',
    body: 'Carved into ancient temples from Borobudur to Prambanan, the Kalpataru is the divine tree that grants every honest wish. Our table is its small grove.',
    image: IMG.logoBanyan,
  },
];
