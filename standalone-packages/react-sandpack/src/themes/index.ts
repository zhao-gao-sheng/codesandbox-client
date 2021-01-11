import { SandpackTheme } from '../types';

export const SandpackLightTheme: SandpackTheme = {
  palette: {
    highlightText: '#5B6776',
    defaultText: '#999999',
    inactive: '#E5E7EB',
    mainBackground: '#f8f9fb',
    inputBackground: '#ffffff',
    accent: '#6caedd',
  },
  syntax: {
    plain: '#1F2933',
    disabled: '#A7B6C2',
    keyword: '#1A56DB',
    tag: '#1A56DB',
    definition: '#A23DAD',
    property: '#14919B',
    static: '#1992D4',
  },
};

export const SandpackDarkTheme: SandpackTheme = {
  palette: {
    highlightText: '#FFFFFF',
    defaultText: '#999999',
    inactive: '#343434',
    mainBackground: '#040404',
    inputBackground: '#242424',
    accent: '#6caedd',
  },
  syntax: {
    plain: '#FFFFFF',
    disabled: '#999999',
    keyword: '#76D0FB',
    tag: '#76D0FB',
    definition: '#A23DAD',
    property: '#14919B',
    static: '#C78DF0',
  },
};

export const NightOwlTheme: SandpackTheme = {
  palette: {
    highlightText: 'rgb(197, 228, 253)',
    defaultText: 'rgb(95, 126, 151)',
    inactive: 'rgb(58, 62, 77)',
    mainBackground: 'rgb(1, 22, 39)',
    inputBackground: 'rgb(11, 41, 66)',
    accent: '#7fdbca',
  },
  syntax: {
    plain: '#d6deeb',
    disabled: '#999999',
    keyword: '#c792ea',
    tag: '#7fdbca',
    definition: '#A23DAD',
    property: '#addb67',
    static: '#ecc48d',
  },
};
