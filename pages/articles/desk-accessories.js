import Head from 'next/head';

export default function DeskAccessories() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Desk Accessories for Focus</title>
      </Head>
      <h1 style={styles.title}>Top Desk Accessories for Focus</h1>

      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/61rJxAOyYVL._AC_SL1500_.jpg" alt="Quntis LED Monitor Light Bar" style={styles.image} />
        <h2>Quntis LED Monitor Light Bar</h2>
        <p style={styles.description}>
          A USB-powered light bar that clips on your monitor to reduce glare and eye strain.
        </p>
        <p style={styles.review}><strong>Rating:</strong> ★★★★☆ (4.6/5 from 6,400+ reviews)</p>
        <a href="https://www.amazon.co.uk/dp/B08X9T2H6J?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>

      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/81mQKga4qdL._AC_SL1500_.jpg" alt="Desk Organizer Tray" style={styles.image} />
        <h2>Mesh Office Desk Organizer Tray</h2>
        <p style={styles.description}>
          Keep your workspace clean and clutter-free with this multi-layered desk organizer.
        </p>
        <p style={styles.review}><strong>Rating:</strong> ★★★★☆ (4.5/5 from 3,000+ reviews)</p>
        <a href="https://www.amazon.co.uk/dp/B07Y4X3WTQ?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#F3F4F6' },
  title: { textAlign: 'center', color: '#1E3A8A' },
  card: { backgroundColor: '#FFFFFF', padding: '20px', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' },
  image: { maxWidth: '100%', height: 'auto', borderRadius: '6px' },
  description: { color: '#4B5563' },
  review: { fontStyle: 'italic', color: '#6B7280' },
  button: { display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#FACC15', color: '#1E3A8A', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' },
};
