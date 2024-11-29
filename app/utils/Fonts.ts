import { Ubuntu, Comic_Neue, Poppins, Montserrat, } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';

const ubuntu: NextFont = Ubuntu({ display: 'swap', weight: ['400', '700', '500'], subsets: ['latin'] });
const poppins: NextFont = Poppins({ display: 'swap', weight: ['400', '500', '600', '700', '500', '800'], subsets: ['latin'] });
const comicNeue: NextFont = Comic_Neue({ display: 'swap', weight: ['700', '300', '400'], subsets: ['latin'] });
const monsterRat: NextFont = Montserrat({ display: 'swap', weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] });


export { ubuntu, poppins, comicNeue, monsterRat }
