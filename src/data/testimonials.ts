export type Testimonial = {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anastasia Volkova',
    role: 'Food writer',
    city: 'Saint Petersburg',
    quote:
      'Walking into Kalpataru is walking into a different climate. The light shifts, the air softens, and the food tells stories your mouth has never heard.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Made Surya',
    role: 'Visiting from Bali',
    city: 'Ubud',
    quote:
      'I tasted my grandmother\'s sambal here, four thousand kilometers from home. I cried into my soto. Beautiful work.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Dmitri Korovin',
    role: 'Architect',
    city: 'Moscow',
    quote:
      'A small room that contains an island — emerald walls, wayang shadows, and a rendang that turns dinner into a ceremony.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Lina Pradnyani',
    role: 'Indonesian community lead',
    city: 'Saint Petersburg',
    quote:
      'For us, Kalpataru is the embassy of taste. Every dish is correct, every gesture is warm. Pulang ke rumah — we come home.',
    rating: 5,
  },
];
