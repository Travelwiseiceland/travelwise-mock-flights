
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #dbeafe, #f0f9ff)',
      color: '#1e293b',
      padding: '2rem',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>✈️ TravelWise</h1>
      <p style={{ fontSize: '1.25rem', color: '#334155' }}>Allt sem þú þarft í þínu ferðalagi</p>
      <p style={{ maxWidth: '600px', marginTop: '1rem', fontSize: '1rem' }}>
        Snjallt ferðaforrit sem notar gervigreind til að finna flug, gistingu, mat og afþreyingu.
      </p>
      <a
        href="/flights"
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '1rem',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        Skoða flug
      </a>
    </div>
  )
}
