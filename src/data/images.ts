// Centralized image manifest. All assets live in /public/img.
// Renamed from the original Cyrillic + screenshot filenames for portability.
//
// Vite rewrites *imported* asset URLs against `base`, but raw string paths
// like "/img/foo.png" are emitted as-is and break under a project Pages URL
// (e.g. /kalpataru-website/). Prefixing every path with BASE_URL keeps these
// working in both `vite dev` ("/") and the deployed site ("/kalpataru-website/").
const B = import.meta.env.BASE_URL; // ends with a trailing slash

export const IMG = {
  logoMark: `${B}img/logo-mark.png`,
  logoBanyan: `${B}img/logo-banyan.png`,
  wayang: `${B}img/wayang.png`,
  guests: `${B}img/guests.png`,
  interiorBlue: `${B}img/interior-blue.png`,
  interiorWindow: `${B}img/interior-window.png`,
  windowTree: `${B}img/window-tree.png`,
  printedMenu: `${B}img/printed-menu.png`,
  dishSoto: `${B}img/dish-soto.png`,
  dishNasiGoreng: `${B}img/dish-nasi-goreng.png`,
} as const;

export type ImgKey = keyof typeof IMG;
