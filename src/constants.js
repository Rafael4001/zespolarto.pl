import photo1 from '../static/image/photo_1.png';
import photo2 from '../static/image/photo_2_small.jpg';
import photo3 from '../static/image/photo_3_small.jpg';
import photo4 from '../static/image/photo_4_small.jpg';
import logo from '../static/image/logo.png';
import LogoOnTheFlowers from '../static/image/LogoWKwiatach_342x300.png';
import Lovers from '../static/image/lovers_small.png';
import Bride from '../static/image/icons/bride.svg';
import Smile from '../static/image/icons/smile.svg';
import Music from '../static/image/icons/music.svg';
import Info_Icon from '../static/image/icons/info_icon.svg';
import leaf from '../static/image/icons/leaf.svg';
import facebookPage from '../static/image/icons/facebookPage.svg';
import lublinMap from '../static/image/WojLubelskie.jpg';
import galleryCardPhoto from '../static/image/GalleryCardPhoto.jpeg';
import videoCardPhoto from '../static/image/videoCardPhoto.jpeg';


import Naydis from '../static/image/songsImages/Naydis.jpg';
import poparzeniKawaTrzy from '../static/image/songsImages/poparzeniKawaTrzy.jpg';
import marcus from '../static/image/songsImages/marcus.jpg';
import powerPLay from '../static/image/songsImages/powerPLay.jpg';
import urszula from '../static/image/songsImages/urszula.jpg';
import dajToGlosniej from '../static/image/songsImages/dajToGlosniej.jpg';
import DefaultSongImage from '../static/image/songsImages/defaultSongImage.jpg';


export const SONGS_IMAGES = {
  DefaultSongImage: DefaultSongImage,
  dajToGlosniej: dajToGlosniej,
  marcus: marcus,
  Naydis: Naydis,
  powerPLay: powerPLay,
  poparzeniKawaTrzy: poparzeniKawaTrzy,
  urszula: urszula,
};


export const IMAGE_1 = photo1;
export const IMAGE_2 = photo2;
export const IMAGE_3 = photo3;
export const IMAGE_4 = photo4;
export const LOGO = logo;
export const LOGO_ON_THE_FLOWERS = LogoOnTheFlowers;
export const LOVERS = Lovers;
export const BRIDE = Bride;
export const SMILE = Smile;
export const MUSIC = Music;
export const INFO_ICON = Info_Icon;
export const LEAF = leaf;
export const FACEBOOK_PAGE = facebookPage;
export const LUBLIN_MAP = lublinMap;
export const VIDEO_CARD_IMAGE = videoCardPhoto;
export const PHOTO_CARD_IMAGE = galleryCardPhoto;


export const MAX_PAGE_WIDTH = '80rem';


const HOME = 'Home';
const PHOTO = 'Zdjęcia';
const MEDIA = 'Media';
const DEMO = 'Demo';
const OFERTA = 'Oferta';
const KONTAKT = 'Kontakt';
const KALENDARZ = 'Kalendarz';

export const LINKS= {
  HOME: './',
  DEMO: './demo',
  CONTACT: './contact',
  MEDIA: './media',
};

export const MENU_ITEMS = [
  {name: HOME, link: LINKS.HOME},
  {name: DEMO, link: LINKS.DEMO},
  // {name: PHOTO, link: './photo'},
  // {name: MEDIA, link: LINKS.MEDIA},
  // {name: OFERTA, link: './oferta'},
  // {name: KALENDARZ, link: './kalendarz'},
  {name: KONTAKT, link: LINKS.CONTACT},
];

export const MENU_ITEM_WIDTH = 20;


export const COLORS = {
  grey: {
    light: '#F2F2F2',
    medium: '#F5F5F5',
    dark: '#CFCFCF',
    grey_1: '#91919117',
  },
  red: {
    main: '#b41616',
    medium: '#a81b1b',
  },
  blue: {
    main: '#3B5897',
  },
};

export const FACEBOOK = '/static/image/facebook_logo.svg';

export const FACEBOOK_URL = 'https://www.facebook.com/Zesp%C3%B3%C5%82-ARTO-203075696487749/';
export const RAFAL_CIESIELCZUK_LINKED_IN = 'https://www.linkedin.com/in/rafa%C5%82-ciesielczuk-33578391/';

export const MARGIN_TOP_UNDER_MENU= '4rem';

export const SCREEN_SIZE={
  POINT_750: 750,
};
