import { Roboto, Ubuntu, Comic_Neue, Poppins, Lato, Pacifico, Roboto_Mono, Montserrat } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';

const roboto: NextFont = Roboto({ display: 'swap', weight: ['400', '500', '700'], subsets: ['latin'] });
const robotoMono: NextFont = Roboto_Mono({ display: "swap", weight: ['400', '500', '600', '700'], subsets: ['latin'] });
const ubuntu: NextFont = Ubuntu({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });
const poppins: NextFont = Poppins({ display: 'swap', weight: ['400', '500', '600', '700'], subsets: ['latin'] });
const comicNeue: NextFont = Comic_Neue({ display: 'swap', weight: ['700'], subsets: ['latin'] });
const lato: NextFont = Lato({ display: 'swap', weight: ['400', '700'], subsets: ['latin'] });
const pacifico: NextFont = Pacifico({ display: 'swap', weight: ['400'], subsets: ['latin'] });
const monsterRat: NextFont = Montserrat({ display: 'swap', weight: ['400', '500', '600', '800',], subsets: ['latin'] });

export { roboto, robotoMono, ubuntu, poppins, comicNeue, lato, pacifico, monsterRat }
