import '../styles/globals.css';
import Navigation from '../components/navigation.jsx';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}
