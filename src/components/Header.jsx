// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isChat = location.pathname === '/chat'

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(12px)',
        background: isChat
          ? 'rgba(11,15,25,0.9)'
          : 'linear-gradient(rgba(11,15,25,0.72), rgba(11,15,25,0))',
        borderBottom: '1px solid rgba(42,51,84,0.6)',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        style={{
          height: '64px',
          width: 'min(1120px, 92%)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '.02em',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          AI 비서
        </Link>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Link
            to="/"
            style={{
              color: location.pathname === '/' ? '#a78bfa' : '#cbd5e1',
              padding: '8px 14px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            홈
          </Link>
          <Link
            to="/chat"
            style={{
              color: '#fff',
              background:
                location.pathname === '/chat'
                  ? 'linear-gradient(135deg,#6366f1,#8b5cf6)'
                  : 'rgba(255,255,255,0.1)',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            시작하기
          </Link>
        </div>
      </div>
    </header>
  )
}
