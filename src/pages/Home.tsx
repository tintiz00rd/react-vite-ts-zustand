import { useTranslation } from 'react-i18next';
import { useCounterStore } from '../store/counter';

export default function Home() {
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);

    const { t, i18n } = useTranslation();

  const switchLanguage = (lang: 'en' | 'pt') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>{t('home.title')}</h1>
        <p style={styles.description}>{t('home.description')}</p>

        <div style={styles.languageSwitcher}>
          <button onClick={() => switchLanguage('pt')}>🇧🇷 Português</button>
          <button onClick={() => switchLanguage('en')}>🇺🇸 English</button>
        </div>

        <div>
          <h2>{t('home.zustand.title')}</h2>
          <h3>{count}</h3>
          <div style={styles.zustandCounter}>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>{t('home.zustand.reset')}</button>
            <button onClick={increment}>+</button>
          </div>
        </div>

        <footer style={styles.footer}>
          <p>{t('home.footer')}</p>
        </footer>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  languageSwitcher: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  footer: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#666',
  },
  zustandCounter: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
  }
};