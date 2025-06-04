import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <Head>
        <title>Remote Office Gear</title>
      </Head>

      <header style={styles.header}>
        <div style={styles.overlay}>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
          <h1 style={styles.title}>Remote Office Gear</h1>
          <p style={styles.subtitle}>Essential tools and guides for high-performance remote workspaces</p>
          <input
            type="text"
            placeholder="🔍 Search remote gear..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.href = `/search?q=${encodeURIComponent(e.target.value)}`;
              }
            }}
            style={styles.searchBar}
          />
          <a href="#newsletter" style={styles.cta}>Explore Gear →</a>
        </div>
      </header>

      <main style={styles.main}>
        <section>
          <h2 style={styles.sectionTitle}>🚀 Trending Guides</h2>
          <ul style={styles.articleList}>
            <li style={styles.articleItem}>
              <Link href="/articles/best-office-chairs" legacyBehavior>
                <a style={styles.link}>🪑 Best Ergonomic Office Chairs</a>
              </Link>
            </li>
            <li style={styles.articleItem}>
              <Link href="/articles/tools-under-50" legacyBehavior>
                <a style={styles.link}>⏱️ Top Tools Under £50</a>
              </Link>
            </li>
            <li style={styles.articleItem}>
              <Link href="/articles/desk-accessories" legacyBehavior>
                <a style={styles.link}>📎 Desk Accessories for Focus</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer id="newsletter" style={styles.footer}>
        <h3 style={styles.footerTitle}>📬 Stay Updated</h3>
        <p style={styles.footerText}>Subscribe to monthly gear drops, deals, and tips!</p>
        <form action="https://formspree.io/f/mnqeylkl" method="POST" style={styles.form}>
          <input type="email" name="email" placeholder="you@example.com" required style={styles.input} />
          <button type="submit" style={styles.button}>Subscribe</button>
        </form>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#F9FAFB',
    color: '#1F2937',
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundImage: 'linear-gradient(to right, #1E3A8A, #3B82F6)',
    padding: '60px 20px',
    textAlign: 'center',
    color: '#FFFFFF',
    position: 'relative',
  },
  overlay: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  logo: {
    width: '60px',
    height: '60px',
    marginBottom: '15px',
  },
  title: {
    fontSize: '2.7em',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#E0E7FF',
    marginBottom: '20px',
  },
  searchBar: {
    padding: '12px 20px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1em',
    marginBottom: '20px',
  },
  cta: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '12px 24px',
    backgroundColor: '#FACC15',
    color: '#1F2937',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1em',
  },
  main: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
  },
  sectionTitle: {
    fontSize: '1.8em',
    textAlign: 'center',
    marginBottom: '25px',
    color: '#111827',
  },
  articleList: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  articleItem: {
    marginBottom: '20px',
  },
  link: {
    display: 'block',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    padding: '15px 20px',
    fontSize: '18px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    color: '#1E3A8A',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1E3A8A',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '40px 20px',
  },
  footerTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  footerText: {
    fontSize: '1em',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '12px',
    width: '250px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1em',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#FACC15',
    color: '#1E3A8A',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
