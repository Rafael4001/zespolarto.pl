import photo1 from '../static/image/mainBackground-compressor.png';
import photo2 from '../static/image/photo_1.jpg';
import photo3 from '../static/image/photo_2.jpg';
import logo from '../static/image/logo.png';
import LogoOnTheFlowers from '../static/image/LogoWKwiatach_342x300.png';


import song_1 from '../static/image/songsImages/song_1.jpg';
import song_2 from '../static/image/songsImages/song_2.jpg';
import song_3 from '../static/image/songsImages/song_3.jpg';
import song_4 from '../static/image/songsImages/song_4.jpg';
import Bruno_Mars from '../static/image/songsImages/Bruno_Mars.jpg';
import Akcent from '../static/image/songsImages/Akcent.jpg';


export const SONGS_IMAGES={
  song_1: song_1,
  song_2: song_2,
  song_3: song_3,
  song_4: song_4,
  Bruno_Mars: Bruno_Mars,
  Akcent: Akcent,
};


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
