import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Head>
        <title>Remote Office Gear</title>
      </Head>
      <header style={{ backgroundColor: '#0070f3', padding: '20px' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Remote Office Gear</h1>
        <p style={{ color: 'white', textAlign: 'center', marginTop: '5px' }}>Curated tools to boost productivity</p>
      </header>
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        <h2>Top Articles</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li style={linkStyle}><Link href="/articles/best-office-chairs">🪑 Best Ergonomic Office Chairs</Link></li>
          <li style={linkStyle}><Link href="/articles/tools-under-50">⏱️ Productivity Tools Under £50</Link></li>
          <li style={linkStyle}><Link href="/articles/desk-accessories">💡 Desk Accessories for Focus</Link></li>
        </ul>
      </main>
    </div>
  );
}

const linkStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  marginBottom: '15px',
  padding: '15px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  fontSize: '18px',
};
