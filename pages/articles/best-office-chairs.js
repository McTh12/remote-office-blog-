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
        <p style={styles.description}>
          Adjustable lumbar support, breathable mesh, and a sleek ergonomic design make this chair ideal for long workdays.
        </p>
        <p style={styles.review}><strong>Rating:</strong> ★★★★☆ (4.5/5 from 7,800+ reviews)</p>
        <a href="https://www.amazon.co.uk/dp/B0BPDWNSD6?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>

      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/71j0hV5QhZL._AC_SL1500_.jpg" alt="SIHOO Doro C300 Chair" style={styles.image} />
        <h2>SIHOO Doro C300 Mesh Chair</h2>
        <p style={styles.description}>
          Includes headrest, lumbar support, and a leg rest for full ergonomic comfort during long sitting sessions.
        </p>
        <p style={styles.review}><strong>Rating:</strong> ★★★★☆ (4.4/5 from 5,600+ reviews)</p>
        <a href="https://www.amazon.co.uk/dp/B0C3HHMBLT?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
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
