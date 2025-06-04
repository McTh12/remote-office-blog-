import Head from 'next/head';

export default function TrendingProducts() {
  const products = [
    {
      name: "Durrafy Ergonomic Office Chair",
      price: "£58.98",
      reviews: "No reviews",
      rating: "-",
      image: "https://m.media-amazon.com/images/I/71WClWH42AL._AC_SL1500_.jpg",
      url: "https://www.amazon.co.uk/dp/B0BPSNG4NT?tag=officessuppli-20",
    },
    {
      name: "Anker Soundcore Q20i Headphones",
      price: "£49.99",
      reviews: "4,500+",
      rating: "4.8",
      image: "https://m.media-amazon.com/images/I/61dVKpJvG8L._AC_SL1500_.jpg",
      url: "https://www.amazon.co.uk/dp/B0BZV3PWZK?tag=officessuppli-20",
    },
    {
      name: "VonHaus Desk Converter",
      price: "£59.99",
      reviews: "58",
      rating: "4.7",
      image: "https://m.media-amazon.com/images/I/61FObcUw18L._AC_SL1500_.jpg",
      url: "https://www.amazon.co.uk/dp/B0756D8TVQ?tag=officessuppli-20",
    },
    {
      name: "Rocketbook Pro 2.0 Notebook",
      price: "£72.55",
      reviews: "2",
      rating: "3.5",
      image: "https://m.media-amazon.com/images/I/71jYeMZ2yFL._AC_SL1500_.jpg",
      url: "https://www.amazon.co.uk/dp/B0BR91G8CH?tag=officessuppli-20",
    },
    {
      name: "Styletech Wireless Keyboard & Mouse",
      price: "£19.99",
      reviews: "1",
      rating: "5.0",
      image: "https://m.media-amazon.com/images/I/51KAXcn1ykL._AC_SL1000_.jpg",
      url: "https://www.amazon.co.uk/dp/B0D2BL3DKR?tag=officessuppli-20",
    },
    {
      name: "LEUCHTTURM1917 Weekly Planner",
      price: "£25.90",
      reviews: "35",
      rating: "4.9",
      image: "https://m.media-amazon.com/images/I/81JSJY+xFqL._AC_SL1500_.jpg",
      url: "https://www.amazon.co.uk/dp/B098FGH6T9?tag=officessuppli-20",
    },
    {
      name: "Kikkerland Office Kit",
      price: "£10.00",
      reviews: "1",
      rating: "5.0",
      image: "https://m.media-amazon.com/images/I/61M9e44ESmL._AC_SL1200_.jpg",
      url: "https://www.johnlewis.com/kikkerland-anywhere-office-kit/p6311610",
    },
    {
      name: "Vinsetto Heated Massage Chair",
      price: "£139.99",
      reviews: "92",
      rating: "4.4",
      image: "https://m.media-amazon.com/images/I/71kiD9PCfCL._AC_SL1500_.jpg",
      url: "https://www.amazon.co.uk/dp/B086BLVHQH?tag=officessuppli-20",
    }
  ];

  return (
    <div style={styles.wrapper}>
      <Head><title>Top Trending Office Products</title></Head>
      <h2 style={styles.heading}>🔥 Trending Office Essentials</h2>
      <div style={styles.grid}>
        {products.map((item, idx) => (
          <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p><strong>{item.price}</strong></p>
            <p>{item.reviews} reviews – ⭐ {item.rating}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '40px 20px',
    backgroundColor: '#F3F4F6',
    color: '#1F2937',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#FFF',
    padding: '15px',
    borderRadius: '10px',
    textDecoration: 'none',
    color: '#1F2937',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
};
