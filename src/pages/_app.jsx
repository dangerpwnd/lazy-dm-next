/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme.js';
import Navigation from '../components/navigation.jsx';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navigation />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}