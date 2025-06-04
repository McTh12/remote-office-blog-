import Head from 'next/head';

export default function DeskAccessories() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Best Desk Accessories</title>
      </Head>
      <h1 style={styles.title}>Top Accessories to Enhance Your Workspace</h1>
      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/61rJxAOyYVL._AC_SL1500_.jpg" alt="Quntis Monitor Light Bar" style={styles.image} />
        <h2>Quntis LED Monitor Light Bar</h2>
        <p>Reduces eye strain and improves lighting for late-night work sessions.</p>
        <a href="https://www.amazon.co.uk/dp/B08X9T2H6J?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>
      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/81mQKga4qdL._AC_SL1500_.jpg" alt="Desk Organizer Tray" style={styles.image} />
        <h2>Desk Organizer Tray</h2>
        <p>Keep your desktop clutter-free with this minimalist and practical tray.</p>
        <a href="https://www.amazon.co.uk/dp/B07Y4X3WTQ?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Arial', padding: '20px', backgroundColor: '#f8f9fa' },
  title: { textAlign: 'center' },
  card: { backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' },
  image: { maxWidth: '100%', height: 'auto', borderRadius: '6px' },
  button: { display: 'inline-block', marginTop: '10px', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '6px', textDecoration: 'none' },
};
