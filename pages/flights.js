
import { useState } from 'react';

const mockFlights = [
  { from: "KEF", to: "BCN", date: "2025-06-10", airline: "Play", price: "39.990 kr" },
  { from: "KEF", to: "LHR", date: "2025-06-12", airline: "Icelandair", price: "32.400 kr" },
  { from: "KEF", to: "BER", date: "2025-06-14", airline: "Wizz Air", price: "28.990 kr" }
];

export default function Flights() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = mockFlights.filter(f =>
      f.from.toLowerCase().includes(from.toLowerCase()) &&
      f.to.toLowerCase().includes(to.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🔎 Leita að flugum</h1>
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        <input
          placeholder="Frá (t.d. KEF)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '0.75rem',
            border: '1px solid #cbd5e1',
            flexGrow: 1,
            minWidth: '150px'
          }}
        />
        <input
          placeholder="Til (t.d. BCN)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{
            padding: '0.75rem',
            borderRadius: '0.75rem',
            border: '1px solid #cbd5e1',
            flexGrow: 1,
            minWidth: '150px'
          }}
        />
        <button onClick={handleSearch} style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.75rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>Leita</button>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {results.map((flight, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}>
            <h2>{flight.from} ➔ {flight.to}</h2>
            <p><strong>Dagsetning:</strong> {flight.date}</p>
            <p><strong>Flugfélag:</strong> {flight.airline}</p>
            <p><strong>Verð:</strong> {flight.price}</p>
            <button style={{
              marginTop: '0.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}>Bóka</button>
          </div>
        ))}
        {results.length === 0 && (
          <p style={{ fontStyle: 'italic', color: '#94a3b8' }}>Engin flug fundust. Prófaðu að slá inn KEF og BCN.</p>
        )}
      </div>
    </div>
  );
}
