
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Remote Office Gear</title>
      </Head>
      <main>
        <h1>Remote Office Gear – Work Smarter</h1>
        <p>Your trusted source for productivity and ergonomic gear.</p>
        <ul>
          <li><Link href="/articles/best-office-chairs">Top 7 Ergonomic Office Chairs</Link></li>
          <li><Link href="/articles/tools-under-50">Must-Have Productivity Tools Under $50</Link></li>
          <li><Link href="/articles/desk-accessories">Best Desk Accessories for Focus</Link></li>
        </ul>
      </main>
    </div>
  );
}
