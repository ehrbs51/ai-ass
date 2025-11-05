export default function Landing() {
  return (
    <main style={{
      background:'linear-gradient(to bottom,#0b0f19,#15192b)',
      color:'#fff',
      minHeight:'100vh',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    }}>
      <h1 style={{fontSize:'3rem', fontWeight:'800', color:'#8b5cf6'}}>
        당신의 AI 비서
      </h1>
      <p style={{fontSize:'1.25rem', margin:'16px 0 32px'}}>
        궁금한 것이 있으신가요? 대화를 시작해보세요.
      </p>
      <a
        href="/chat"
        style={{
          background:'linear-gradient(90deg,#6366f1,#8b5cf6)',
          padding:'12px 24px',
          borderRadius:12,
          color:'#fff',
          textDecoration:'none',
          fontWeight:'600'
        }}
      >
        시작하기
      </a>
    </main>
  )
}
