import { IMG } from './images';

export type Dish = {
  id: string;
  name: string;
  origin: string;
  region: 'Java' | 'Bali' | 'Sumatra' | 'Nusantara';
  description: string;
  story: string;
  price: number;
  spice: 0 | 1 | 2 | 3;
  image: string;
  tags: string[];
};

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'nasi-goreng',
    name: 'Nasi Goreng',
    origin: 'Indonesian National Dish',
    region: 'Nusantara',
    description:
      'Wok-fired heritage rice with sweet kecap manis, fried shallots, krupuk, and a sunlit egg.',
    story:
      'Born from the resourceful kitchens of Java — yesterday\'s rice reborn in fire and smoke. A daily ritual served from breakfast to midnight across the archipelago.',
    price: 469,
    spice: 1,
    image: IMG.dishNasiGoreng,
    tags: ['signature', 'rice', 'kecap manis'],
  },
  {
    id: 'soto-ayam',
    name: 'Soto Ayam',
    origin: 'Java Soul Soup',
    region: 'Java',
    description:
      'Turmeric-gold broth with hand-pulled chicken, glass noodles, lime, sambal, and crisp emping.',
    story:
      'A bowl of memory. Soto carts wander Javanese streets at dawn — yellow steam rising into the air, ginger and lemongrass perfuming the alleyways.',
    price: 579,
    spice: 1,
    image: IMG.dishSoto,
    tags: ['signature', 'soup', 'turmeric'],
  },
  {
    id: 'sate-ayam',
    name: 'Sate Ayam',
    origin: 'Skewered Heritage',
    region: 'Java',
    description:
      'Charcoal-grilled chicken skewers glazed in rich peanut sauce, lontong rice cake, pickled cucumber.',
    story:
      'The scent of sate over arang charcoal is the scent of an Indonesian evening — markets glowing, bamboo skewers turning, peanut sauce stirred slow.',
    price: 649,
    spice: 1,
    image: IMG.dishSoto,
    tags: ['signature', 'grill', 'peanut'],
  },
  {
    id: 'mie-goreng',
    name: 'Mie Goreng',
    origin: 'Wok-Fire Noodles',
    region: 'Nusantara',
    description:
      'Stir-fried egg noodles with sweet soy, garlic, prawn, scallion, and a whisper of birds-eye chili.',
    story:
      'A street-cart classic across Java and Bali — high heat, fast hands, the song of the wok ringing into the night.',
    price: 489,
    spice: 2,
    image: IMG.dishNasiGoreng,
    tags: ['noodles', 'wok'],
  },
  {
    id: 'gado-gado',
    name: 'Gado Gado',
    origin: 'Vegetable Mosaic',
    region: 'Java',
    description:
      'A garden of blanched greens, tofu, tempeh and egg under warm peanut-coconut dressing.',
    story:
      'Gado-gado means "mix-mix" — a celebration of harmony, where every vegetable holds its character beneath a single golden sauce.',
    price: 559,
    spice: 0,
    image: IMG.dishSoto,
    tags: ['vegetarian', 'peanut'],
  },
  {
    id: 'rendang',
    name: 'Rendang Pedang',
    origin: 'Sumatran Slow-Fire',
    region: 'Sumatra',
    description:
      'Beef braised for hours in coconut milk and forest spices until dark, glossy, and tender.',
    story:
      'Rendang is patience made edible. From the highlands of West Sumatra, simmered until the spices crystallize on the meat — once cooked for ceremonial feasts, now a nightly miracle.',
    price: 749,
    spice: 2,
    image: IMG.dishNasiGoreng,
    tags: ['signature', 'slow-cooked', 'beef'],
  },
];
