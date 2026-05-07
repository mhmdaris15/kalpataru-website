import { IMG } from './images';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  spice?: 0 | 1 | 2 | 3;
  vegetarian?: boolean;
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: 'mains',
    title: 'Hidangan Utama',
    subtitle: 'Main Dishes',
    caption: 'The soul of the Indonesian table — rice, noodles, and slow-fired heritage.',
    items: [
      {
        id: 'nasi-goreng',
        name: 'Nasi Goreng',
        description: 'Heritage fried rice with kecap manis, krupuk, sunny egg.',
        price: 469,
        image: IMG.dishNasiGoreng,
        spice: 1,
        signature: true,
      },
      {
        id: 'mie-goreng',
        name: 'Mie Goreng',
        description: 'Stir-fried egg noodles with garlic, prawn, scallion.',
        price: 489,
        spice: 2,
      },
      {
        id: 'soto-ayam',
        name: 'Soto Ayam',
        description: 'Turmeric chicken broth, glass noodles, lime, sambal.',
        price: 579,
        image: IMG.dishSoto,
        spice: 1,
        signature: true,
      },
      {
        id: 'sate-ayam',
        name: 'Sate Ayam',
        description: 'Charcoal-grilled chicken, peanut sauce, lontong.',
        price: 649,
        spice: 1,
        signature: true,
      },
      {
        id: 'gado-gado',
        name: 'Gado Gado',
        description: 'Garden vegetables, tofu, tempeh, peanut-coconut sauce.',
        price: 559,
        spice: 0,
        vegetarian: true,
      },
      {
        id: 'rendang',
        name: 'Rendang Pedang',
        description: 'Sumatran slow-braised beef, coconut, forest spices.',
        price: 749,
        spice: 2,
        signature: true,
      },
      {
        id: 'ayam-goreng',
        name: 'Ayam Goreng',
        description: 'Crisp marinated chicken, sambal matah, kerupuk.',
        price: 549,
        spice: 1,
      },
      {
        id: 'nasi-uduk',
        name: 'Nasi Uduk',
        description: 'Fragrant coconut rice, fried tempeh, anchovies, egg.',
        price: 519,
        spice: 0,
      },
    ],
  },
  {
    id: 'small',
    title: 'Mulai Pelan',
    subtitle: 'Small Plates',
    caption: 'Begin the journey — sambals, krupuk, and tropical bites.',
    items: [
      {
        id: 'krupuk',
        name: 'Krupuk Trio',
        description: 'Crisp shrimp, emping, and cassava crackers.',
        price: 219,
        vegetarian: true,
      },
      {
        id: 'pisang-goreng',
        name: 'Pisang Goreng',
        description: 'Golden fried banana, palm sugar, sea salt.',
        price: 289,
        vegetarian: true,
      },
      {
        id: 'tempeh-mendoan',
        name: 'Tempeh Mendoan',
        description: 'Soft-fried tempeh in spiced batter, kecap dip.',
        price: 329,
        vegetarian: true,
      },
      {
        id: 'lumpia',
        name: 'Lumpia Semarang',
        description: 'Bamboo shoot spring rolls, sweet garlic glaze.',
        price: 379,
      },
      {
        id: 'sambal-trio',
        name: 'Sambal Trio',
        description: 'Matah, terasi, and bajak — three faces of fire.',
        price: 249,
        spice: 3,
        vegetarian: true,
      },
    ],
  },
  {
    id: 'sweets',
    title: 'Manisan',
    subtitle: 'Sweets of the Archipelago',
    caption: 'Pandan, palm sugar, coconut — desserts woven through generations.',
    items: [
      {
        id: 'klepon',
        name: 'Klepon',
        description: 'Pandan rice balls bursting with palm sugar, coconut.',
        price: 319,
        vegetarian: true,
      },
      {
        id: 'es-cendol',
        name: 'Es Cendol',
        description: 'Pandan jelly, coconut milk, palm sugar, shaved ice.',
        price: 359,
        vegetarian: true,
      },
      {
        id: 'pisang-rai',
        name: 'Pisang Rai',
        description: 'Banana wrapped in rice flour, coconut, palm syrup.',
        price: 339,
        vegetarian: true,
      },
      {
        id: 'kue-lapis',
        name: 'Kue Lapis',
        description: 'Layered rice cake — emerald, gold, and rose.',
        price: 299,
        vegetarian: true,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Minuman',
    subtitle: 'Drinks & Coffee',
    caption: 'From volcano-grown coffees to ginger-warm jamu.',
    items: [
      {
        id: 'kopi-tubruk',
        name: 'Kopi Tubruk',
        description: 'Boiled Javanese coffee with palm sugar.',
        price: 269,
        vegetarian: true,
      },
      {
        id: 'es-jeruk',
        name: 'Es Jeruk Peras',
        description: 'Fresh-pressed orange, palm sugar, ice.',
        price: 229,
        vegetarian: true,
      },
      {
        id: 'wedang-jahe',
        name: 'Wedang Jahe',
        description: 'Hand-pounded ginger tea, lemongrass, palm sugar.',
        price: 249,
        vegetarian: true,
      },
      {
        id: 'teh-tarik',
        name: 'Teh Tarik',
        description: 'Pulled black tea, condensed milk, foam crown.',
        price: 259,
        vegetarian: true,
      },
      {
        id: 'kunyit-asam',
        name: 'Kunyit Asam',
        description: 'Turmeric-tamarind jamu, palm sugar, lime.',
        price: 269,
        vegetarian: true,
      },
    ],
  },
];
