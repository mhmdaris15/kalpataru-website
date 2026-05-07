// Centralized image manifest. All assets live in /public/img.
// Renamed from the original Cyrillic + screenshot filenames for portability.

export const IMG = {
  logoMark: '/img/logo-mark.png',
  logoBanyan: '/img/logo-banyan.png',
  wayang: '/img/wayang.png',
  guests: '/img/guests.png',
  interiorBlue: '/img/interior-blue.png',
  interiorWindow: '/img/interior-window.png',
  windowTree: '/img/window-tree.png',
  printedMenu: '/img/printed-menu.png',
  dishSoto: '/img/dish-soto.png',
  dishNasiGoreng: '/img/dish-nasi-goreng.png',
} as const;

export type ImgKey = keyof typeof IMG;
