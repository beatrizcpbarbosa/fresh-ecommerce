import facialmask from '../imgs/facemaskbg.png';
import facialscrub from '../imgs/facialscrubbg.png';
import facialsoup from '../imgs/facialsoupbg.png';
import moisturizer from '../imgs/moisturizerbg.png';
import sunscreen from '../imgs/sunscreenbg.png';

export const productsData = [
  {
    id: 1,
    name: 'Facial Mask',
    describe: 'pro-quality AHA/BHA facial that resurfaces to reveal greater clarity, improved skin texture and tone, and a more youthful-looking radiance.',
    price: 10.99,
    img: facialmask,
    type: 'SENSITIVE SKIN',
    amout: 1,
    status: 'new',
  },
  {
    id: 2,
    name: 'Facial Soup',
    describe: 'Ceramide-rich gently removes makeup, dirt, pollution, and bacteria from the face and eye area without sensitization, irritation, or stripping skin’s acid mantle.',
    price: 20.99,
    img: facialsoup,
    type: 'NORMAL SKIN & COMBINATION SKIN',
    amout: 1,
    status: 'new',
  },
  {
    id: 3,
    name: 'Sunscreen',
    describe: 'A sheer physical sunscreen that delivers broad-spectrum UVA/UVB protection and helps aid in the prevention of free radical and oxidative damage.',
    price: 10.99,
    img: sunscreen,
    type: 'OILY SKIN & SENSITIVE SKIN',
    amout: 1,
    status: 'new',
  },
  {
    id: 4,
    name: 'Moisturizer',
    describe: 'This multifaceted rescue cream, infused with six African oils and a plant ceramide complex, provides replenishing barrier support by reinforcing skin’s acid mantle and defending against the effects of everyday stressors. Sodium hyaluronate crosspolymer easily soaks in to release intense hydration.',
    price: 7.99,
    img: moisturizer,
    type: 'DRY SKIN',
    amout: 1,
    status: 'old',
  },
  {
    id: 5,
    name: 'Facial Scrub',
    describe: 'This multitasking bar is designed to effectively cleanse while gently removing dead skin cells from the surface of the skin. Infused with a blend of thermal mud, marula, bamboo, and superfruit, this unique formulation creates a creamy lather that dissolves excess oil, pore-clogging surface debris, and impurities while gently exfoliating dead skin cells.',
    price: 10.99,
    img: facialscrub,
    type: 'NORMAL SKIN & COMBINATION SKIN',
    amout: 1,
    status: 'old',
  }
];