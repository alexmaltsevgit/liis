export type AppTheme = {
  colors: {
    background: string;
    red?: string;
    yellow?: string;
    text: {
      primary: string;
      secondary: string;
    };
  };

  breakpoints: {
    lg: string;
    md: string;
    sm: string;
  };
};
