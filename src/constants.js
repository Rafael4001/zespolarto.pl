export const IMAGE_1 = '../static/image/photo_1.png';
export const IMAGE_2 ='../static/image/photo_2_small.jpg';
export const IMAGE_3 ='../static/image/photo_3_small.jpg';
export const IMAGE_4='../static/image/photo_4_small.jpg';
export const LOGO_ON_THE_FLOWERS  = '../static/image/LogoWKwiatach342x300.png';
export const LOVERS = '../static/image/lovers_small.png';
export const BRIDE = '../static/image/icons/bride.svg';
export const SMILE ='../static/image/icons/smile.svg';
export const MUSIC ='../static/image/icons/music.svg';
export const LEAF ='../static/image/icons/leaf.svg';
export const LUBLIN_MAP = '../static/image/WojLubelskie.jpg';
export const PHOTO_CARD_IMAGE ='../static/image/GalleryCardPhoto.jpeg';
export const VIDEO_CARD_IMAGE ='../static/image/videoCardPhoto.jpeg';


//making icons as font https://icomoon.io/app/#/select


import abba from '../static/image/songsImages/abba.jpg';
import afterParty from '../static/image/songsImages/afterParty.jpg';
import akcent from '../static/image/songsImages/akcent.jpg';
import aniaWyszkoni from '../static/image/songsImages/aniaWyszkoni.jpg';
import boys from '../static/image/songsImages/boys.jpg';
import brathanki from '../static/image/songsImages/brathanki.jpg';
import buble from '../static/image/songsImages/buble.jpg';
import budkaSuflera from '../static/image/songsImages/budkaSuflera.jpeg';
import czadoman from '../static/image/songsImages/czadoman.jpg';
import dajToGlosniej from '../static/image/songsImages/dajToGlosniej.jpg';
import DefaultSongImage from '../static/image/songsImages/defaultSongImage.jpg';
import electricLightOrchestra from '../static/image/songsImages/electricLightOrchestra.jpg';
import elenaGheorghe from '../static/image/songsImages/elenaGheorghe.jpg';
import enej from '../static/image/songsImages/enej.jpg';
import fanatic from '../static/image/songsImages/fanatic.jpg';
import freakyBoys from '../static/image/songsImages/freakyBoys.jpg';
import irenaJarocka from '../static/image/songsImages/irenaJarocka.jpg';
import jerzyPolomski from '../static/image/songsImages/jerzyPolomski.jpg';
import karinaStanek from '../static/image/songsImages/karinaStanek.jpg';
import krzysztofKrawczyk from '../static/image/songsImages/krzysztofKrawczyk.jpg';
import lobuzy from '../static/image/songsImages/lobuzy.jpg';
import lombard from '../static/image/songsImages/lombard.jpg';
import marcus from '../static/image/songsImages/marcus.jpg';
import marylaRodowicz from '../static/image/songsImages/marylaRodowicz.jpg';
import masters from '../static/image/songsImages/masters.jpg';
import mig from '../static/image/songsImages/mig.jpg';
import pawelDomagala from '../static/image/songsImages/pawelDomagala.jpg';
import perfect from '../static/image/songsImages/perfect.jpg';
import piekniIMlodzi from '../static/image/songsImages/piekniIMlodzi.jpg';
import piersi from '../static/image/songsImages/piersi.jpg';
import poparzeniKawaTrzy from '../static/image/songsImages/poparzeniKawaTrzy.jpg';
import powerPlay from '../static/image/songsImages/powerPlay.jpg';
import ronnieFerrari from '../static/image/songsImages/ronnieFerrari.jpg';
import skaldowie from '../static/image/songsImages/skaldowie.jpg';
import slawomir from '../static/image/songsImages/slawomir.jpg';
import topGirls from '../static/image/songsImages/topGirls.jpg';
import urszula from '../static/image/songsImages/urszula.jpg';
import veegas from '../static/image/songsImages/veegas.jpg';
import wilki from '../static/image/songsImages/wilki.jpg';
import wojciechGasowski from '../static/image/songsImages/wojciechGasowski.jpg';
import zbigniewWodecki from '../static/image/songsImages/zbigniewWodecki.jpg';


export const SONGS_IMAGES = {
    abba: abba,
    afterParty: afterParty,
    akcent: akcent,
    aniaWyszkoni: aniaWyszkoni,
    boys: boys,
    budkaSuflera: budkaSuflera,
    brathanki: brathanki,
    buble: buble,
    czadoman: czadoman,
    DAJ_TO_GLOSNIEJ: dajToGlosniej,
    DefaultSongImage: DefaultSongImage,
    electricLightOrchestra: electricLightOrchestra,
    elenaGheorghe: elenaGheorghe,
    enej: enej,
    Fanatic: fanatic,
    freakyBoys: freakyBoys,
    irenaJarocka: irenaJarocka,
    jerzyPolomski: jerzyPolomski,
    karinaStanek: karinaStanek,
    krzysztofKrawczyk: krzysztofKrawczyk,
    lobuzy: lobuzy,
    lombard: lombard,
    marcus: marcus,
    marylaRodowicz: marylaRodowicz,
    masters: masters,
    mig: mig,
    pawelDomagala: pawelDomagala,
    perfect: perfect,
    piekniIMlodzi: piekniIMlodzi,
    piersi: piersi,
    poparzeniKawaTrzy: poparzeniKawaTrzy,
    powerPlay: powerPlay,
    ronnieFerrari: ronnieFerrari,
    skaldowie: skaldowie,
    slawomir: slawomir,
    topGirls: topGirls,
    urszula: urszula,
    veegas: veegas,
    wilki: wilki,
    wojciechGasowski: wojciechGasowski,
    zbigniewWodecki: zbigniewWodecki,
};

export const MAX_PAGE_WIDTH = '80rem';


const HOME = 'Home';
const PHOTO = 'Zdjęcia';
const MEDIA = 'Media';
const DEMO = 'Demo';
const OFERTA = 'Oferta';
const KONTAKT = 'Kontakt';
const KALENDARZ = 'Kalendarz';

export const LINKS = {
    HOME: {HREF: './', AS: './'},
    DEMO: {HREF: './demo', AS: './demo'},
    CONTACT: {HREF: './contact', AS: './contact'},
    MEDIA: {HREF: './media', AS: './media'},
    TERMS: {HREF: './terminy', AS: './terminy'},
};

export const MENU_ITEMS = [
    {name: HOME, link: LINKS.HOME.HREF, as: LINKS.HOME.AS},
    {name: DEMO, link: LINKS.DEMO.HREF, as: LINKS.DEMO.AS},
    // {name: PHOTO, link: './photo'},
    // {name: MEDIA, link: LINKS.MEDIA},
    // {name: OFERTA, link: './oferta'},
    // {name: KALENDARZ, link: './kalendarz'},
    {name: KONTAKT, link: LINKS.CONTACT.HREF, as: LINKS.CONTACT.AS},
];


export const FACEBOOK_ICON = '/static/image/icons/facebookWhite.svg';

export const FACEBOOK_URL = 'https://www.facebook.com/Zesp%C3%B3%C5%82-ARTO-203075696487749/';
export const RAFAL_CIESIELCZUK_LINKED_IN = 'https://www.linkedin.com/in/rafa%C5%82-ciesielczuk-33578391/';

export const MARGIN_TOP_UNDER_MENU = '4rem';

export const SCREEN_SIZE = {
    POINT_750: 750,
};

export const STATUS = {
    BUSY: "busy",
    EMPTY: "empty",
    RESERVATION: "reservation",
    HOLIDAY: "holiday",
    UNDEFINED: "undefined",
};

export const WEEK_DAY = {
    MONDAY: "poniedziałek",
    TUESDAY: "wtorek",
    WEDNESTDAY: "środa",
    THURSDAY: "czwartek",
    FRIDAY: "piątek",
    SATUDRAY: "sobota",
    SUNDAY: "niedziela",
};
