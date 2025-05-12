import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: 'en' | 'pt') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t('home.title')}</h1>
      <p style={styles.description}>{t('home.description')}</p>

      <div style={styles.languageSwitcher}>
        <button onClick={() => switchLanguage('pt')}>🇧🇷 Português</button>
        <button onClick={() => switchLanguage('en')}>🇺🇸 English</button>
      </div>

      <footer style={styles.footer}>
        <p>{t('home.footer')}</p>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'sans-serif',
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
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
    marginTop: '3rem',
    fontSize: '0.9rem',
    color: '#666',
  },
};