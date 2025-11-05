import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Chat from './pages/Chat'

export default function App() {
  return (
    <>
            {/* 상단 글로벌 네비게이션 (랜딩에서는 히어로 위쪽에 겹치도록 투명) */}
    <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'linear-gradient(rgba(11,15,25,.72), rgba(11,15,25,0))',
        borderBottom: '1px solid #1a2340'
      }}>
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
            padding: '0 24px',
            color: '#fff',
            fontWeight: 600
          }}
        >
          <div style={{ fontWeight: 900, letterSpacing: '.02em' }}>AI 비서</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link className="button outline" to="/" style={{
              textDecoration: 'none',
              color: '#cbd5e1',
              border: '1px solid rgba(255,255,255,.2)',
              padding: '6px 14px',
              borderRadius: 8
            }}>홈</Link>
            <Link className="button" to="/chat" style={{
              textDecoration: 'none',
              color: '#fff',
              background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              padding: '6px 14px',
              borderRadius: 8
            }}>시작하기</Link>
          </div>
        </div>
      </nav>

      {/* 페이지 라우팅 */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}
