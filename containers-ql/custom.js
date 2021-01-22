import defaultTheme from './default';

export default {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: [
      '#3F6587', // Primary Blue
      '#A6C7DD', // Lighter Blue
      "#3775F2", // 2: Darken 5%
      "rgba(68, 130, 255, 0.2)", // 3: Fade 20%
      "#4C8AFF", // 4: Lighten 3%
      "rgba(68, 130, 255, 0.75)", // 5: Fade 75%
      "#6AA8FF", // 6: Lighten 15%
      "#63A1FF", // 7: Lighten 12%
      "#3F7DFA", // 8: Darken 2%
      "#3369e7", // 9: Algolia color
      "#5896FF", // 10: Lighten 8%
      "#2b69e6", // 11:
      "#236cfe", // 12: darken 10%
      "#4d88ff", // 13: Lighten 5%
    ],
    
  },
};
