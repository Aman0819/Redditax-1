import { lighten, darken } from 'polished';

export default {
  palette: {
    primary: '#202C39',
    primaryLight: lighten(0.2, '#202C39'),
    primaryDark: darken(0.2, '#202C39'),
    secondary: '#283845',
    secondaryLight: lighten(0.2, '#283845'),
    secondaryDark: darken(0.2, '#283845'),
    ternary: '#8BE8CB',
    ternaryLight: lighten(0.2, '#8BE8CB'),
    ternaryDark: darken(0.2, '#8BE8CB'),
    fourth: '#B75D69',
    fourthLight: lighten(0.2, '#B75D69'),
    fourthDark: darken(0.2, '#B75D69'),
    reddit: '#FF5700'
  },
  fonts: {
    primary: 'Nunito'
  },
  breakPoints: {
    desktop: '960px',
    tablet: '600px'
  },
  cardSize: '320px',
  card1: '740px',
  card2: '1349px',
  card3: '1810px',
  trasition1: 'cubic-bezier(.21, 1.00, 0.81, 1.00)',
  br: '1em',
  containerSize: '1400px'
};
