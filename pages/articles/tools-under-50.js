import Head from 'next/head';

export default function ToolsUnder50() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Top Tools Under £50</title>
      </Head>
      <h1 style={styles.title}>Top Productivity Tools Under £50</h1>

      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/61R9Dmu0jaL._AC_SL1500_.jpg" alt="Ticktime Pomodoro Timer" style={styles.image} />
        <h2>Ticktime Pomodoro Timer Cube</h2>
        <p style={styles.description}>
          A simple, rechargeable productivity timer used by top performers. Great for Pomodoro technique users.
        </p>
        <p style={styles.review}><strong>Rating:</strong> ★★★★☆ (4.4/5 from 2,500+ reviews)</p>
        <a href="https://www.amazon.co.uk/dp/B09TZDBB6Q?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>

      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/81lzRZbOxlL._AC_SL1500_.jpg" alt="Rocketbook Smart Notebook" style={styles.image} />
        <h2>Rocketbook Smart Notepad</h2>
        <p style={styles.description}>
          A reusable notebook that connects with Google Drive, Dropbox, and more. Save paper and stay organized.
        </p>
        <p style={styles.review}><strong>Rating:</strong> ★★★★★ (4.7/5 from 10,000+ reviews)</p>
        <a href="https://www.amazon.co.uk/dp/B0C9B2M8H1?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
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
