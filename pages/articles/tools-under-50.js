import Head from 'next/head';

export default function ToolsUnder50() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Productivity Tools Under £50</title>
      </Head>
      <h1 style={styles.title}>Affordable Productivity Tools</h1>
      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/61R9Dmu0jaL._AC_SL1500_.jpg" alt="Ticktime Timer" style={styles.image} />
        <h2>Ticktime Pomodoro Timer Cube</h2>
        <p>Easy-to-use timer for focus and productivity sessions.</p>
        <a href="https://www.amazon.co.uk/dp/B09TZDBB6Q?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
      </div>
      <div style={styles.card}>
        <img src="https://m.media-amazon.com/images/I/81lzRZbOxlL._AC_SL1500_.jpg" alt="Rocketbook Notepad" style={styles.image} />
        <h2>Rocketbook Smart Notepad</h2>
        <p>Reusable digital notebook that syncs with cloud apps — eco-friendly and efficient.</p>
        <a href="https://www.amazon.co.uk/dp/B0C9B2M8H1?tag=officessuppli-20" target="_blank" rel="noopener noreferrer" style={styles.button}>Buy on Amazon</a>
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
