import Typography from 'typography';
import wordpress2016Theme from 'typography-theme-wordpress-2016';

const typography = new Typography(wordpress2016Theme);

// Output CSS as string.
typography.toString();

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();
