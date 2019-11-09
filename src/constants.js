import photo1 from '../static/image/mainBackground-compressor.png';
import photo2 from '../static/image/photo_1.jpg';
import photo3 from '../static/image/photo_2.jpg';
import logo from '../static/image/logo.png';
import LogoOnTheFlowers from '../static/image/LogoWKwiatach.png';


export const IMAGE_1 = photo1;
export const IMAGE_2 = photo2;
export const IMAGE_3 = photo3;
export const LOGO = logo;
export const LOGO_ON_THE_FLOWERS = LogoOnTheFlowers;


const MAIN_PAGE = 'Strona Główna';
const PHOTO = 'Zdjęcia';
const MEDIA = 'Media';
const DEMO = 'Demo';
const OFERTA = 'Oferta';
const KALENDARZ = 'Kalendarz';

export const MENU_ITEMS = [
  {name: MAIN_PAGE, link: './'},
  {name: DEMO, link: './demo'},
  {name: PHOTO, link: './photo'},
  {name: MEDIA, link: './media'},
  {name: OFERTA, link: './oferta'},
  {name: KALENDARZ, link: './kalendarz'},
];

export const MENU_ITEM_WIDTH = 20;
