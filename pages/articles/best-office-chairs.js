import Head from 'next/head';

export default function BestOfficeChairs() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Best Ergonomic Office Chairs</title>
      </Head>
      <h1 style={styles.title}>Top Ergonomic Office Chairs</h1>
      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/61VnrpIVTgL._AC_SL1500_.jpg" alt="SIHOO M18 Chair" style={styles.image} />
        <h2>SIHOO M18 Ergonomic Office Chair</h2>
        <p>Adjustable lumbar support, breathable mesh, and modern design for long hours of work.</p>
        <a href="https://www.amazon.co.uk/dp/B0BPDWNSD6?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>
      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/71j0hV5QhZL._AC_SL1500_.jpg" alt="SIHOO Doro C300 Chair" style={styles.image} />
        <h2>SIHOO Doro C300 Mesh Chair</h2>
        <p>Advanced lumbar support and reclining legrest — perfect for remote work comfort.</p>
        <a href="https://www.amazon.co.uk/dp/B0C3HHMBLT?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
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
