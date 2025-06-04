import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.wrapper}>
      <Head>
        <title>Remote Office Gear</title>
      </Head>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img src="/logo.png" alt="Remote Office Gear Logo" style={styles.logo} />
          <h1 style={styles.title}>Remote Office Gear</h1>
          <p style={styles.subtitle}>Curated tools to boost productivity</p>
          <input
            type="text"
            placeholder="Search gear..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.href = \`/search?q=\${encodeURIComponent(e.target.value)}\`;
              }
            }}
            style={styles.searchBar}
          />
        </div>
      </header>

      {/* Top Articles */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Top Articles</h2>
        <div style={styles.articleGrid}>
          <Link href="/articles/best-office-chairs" legacyBehavior>
            <a style={styles.articleCard}>
              <img src="/chair-thumb.jpg" alt="Chairs" style={styles.articleImage} />
              <h3>ðª Best Ergonomic Office Chairs</h3>
              <p>Curated tools to boost productivity</p>
            </a>
          </Link>
          <Link href="/articles/tools-under-50" legacyBehavior>
            <a style={styles.articleCard}>
              <img src="/tools-thumb.jpg" alt="Tools" style={styles.articleImage} />
              <h3>â±ï¸ Productivity Tools Under Â£50</h3>
              <p>Essential tools for efficient work</p>
            </a>
          </Link>
          <Link href="/articles/desk-accessories" legacyBehavior>
            <a style={styles.articleCard}>
              <img src="/accessories-thumb.jpg" alt="Accessories" style={styles.articleImage} />
              <h3>ð¡ Desk Accessories for Focus</h3>
              <p>Organize and enhance your desk</p>
            </a>
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Top Ergonomic Office Chairs</h2>
        <div style={styles.productGrid}>
          <div style={styles.productCard}>
            <img src="https://m.media-amazon.com/images/I/71WClWH42AL._AC_SL1500_.jpg" style={styles.productImage} />
            <h4>SIHOO M18 Ergonomic Office Chair</h4>
            <p>Adjustable lumbar support, breathable mesh, and modern design.</p>
            <a href="https://www.amazon.co.uk/dp/B0BPSNG4NT?tag=officessuppli-20" target="_blank" style={styles.buyButton}>Buy on Amazon</a>
          </div>
          <div style={styles.productCard}>
            <img src="https://m.media-amazon.com/images/I/71kiD9PCfCL._AC_SL1500_.jpg" style={styles.productImage} />
            <h4>SIHOO Doro C300 Mesh Chair</h4>
            <p>Advanced lumbar support and reclining legrest â perfect for remote work.</p>
            <a href="https://www.amazon.co.uk/dp/B086BLVHQH?tag=officessuppli-20" target="_blank" style={styles.buyButton}>Buy on Amazon</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <footer style={styles.footer}>
        <h3>ð¬ Stay in the Loop</h3>
        <p>Get the latest office gear picks in your inbox.</p>
        <form action="https://formspree.io/f/mnqeylkl" method="POST" style={styles.form}>
          <input type="email" name="email" required placeholder="you@example.com" style={styles.input} />
          <button type="submit" style={styles.button}>Subscribe</button>
        </form>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: { fontFamily: 'sans-serif', color: '#1F2937', margin: 0, padding: 0 },
  header: {
    background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
    padding: '50px 20px',
    color: 'white',
    textAlign: 'center',
  },
  headerContent: { maxWidth: '700px', margin: '0 auto' },
  logo: { width: '50px', marginBottom: '10px' },
  title: { fontSize: '2.5em', margin: '0 0 10px' },
  subtitle: { fontSize: '1.2em', marginBottom: '20px' },
  searchBar: {
    padding: '12px',
    borderRadius: '6px',
    width: '80%',
    maxWidth: '300px',
    border: 'none',
    fontSize: '1em',
  },
  section: { padding: '40px 20px', backgroundColor: '#f9fafb' },
  sectionTitle: { fontSize: '1.8em', textAlign: 'center', marginBottom: '20px' },
  articleGrid: { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' },
  articleCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '220px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#1F2937',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  },
  articleImage: { width: '100%', borderRadius: '6px', marginBottom: '10px' },
  productGrid: { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' },
  productCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    width: '260px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  productImage: { width: '100%', borderRadius: '8px', marginBottom: '10px' },
  buyButton: {
    display: 'inline-block',
    marginTop: '10px',
    backgroundColor: '#facc15',
    color: '#1e3a8a',
    padding: '10px 15px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1e3a8a',
    color: '#fff',
    textAlign: 'center',
    padding: '40px 20px',
  },
  form: { display: 'flex', justifyContent: 'center', marginTop: '15px', flexWrap: 'wrap', gap: '10px' },
  input: { padding: '10px', borderRadius: '5px', border: 'none', width: '250px', fontSize: '1em' },
  button: { padding: '10px 20px', backgroundColor: '#facc15', color: '#1e3a8a', border: 'none', borderRadius: '5px', fontWeight: 'bold' },
};
