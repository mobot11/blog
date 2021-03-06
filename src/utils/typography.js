import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
    return {
        'a.gatsby-resp-image-link': {
            boxShadow: `none`,
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: `Roboto Condensed, sans-serif`,
            color: `#002D62`,
        },
        'h2 a': {
            color: `#00a0ea`,
        },
        a: {
            color: `#00a0ea`,
            boxShadow: `none`,
        },
        'a:hover': {
            textDecoration: 'underline',
        },
        'p, a, small': {
            fontFamily: `Roboto, sans-serif`,
        },
    };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
