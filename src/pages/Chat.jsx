import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { SendIcon } from '../components/Icon'

export default function Chat(){
  const [messages, setMessages] = useState([]) // {role:'user'|'bot', content, time}
  const [text, setText] = useState('')
  const scroller = useRef(null)

  useEffect(()=>{
    scroller.current?.scrollTo(0, scroller.current.scrollHeight)
  }, [messages])

  const send = ()=>{
    const value = text.trim()
    if (!value) return
    const now = new Date().toLocaleTimeString('ko-KR', {hour:'2-digit', minute:'2-digit'})
    setMessages(prev => [...prev, {role:'user', content:value, time:now}])
    setText('')

    // 데모: 간단한 봇 응답(실제 API 연동 시 여기서 fetch)
    setTimeout(()=>{
      const reply = value.length < 18
        ? `“${value}”에 대해 더 자세히 알려주시겠어요?`
        : '좋은 질문입니다. 핵심만 정리해 드릴게요!'
      const t = new Date().toLocaleTimeString('ko-KR', {hour:'2-digit', minute:'2-digit'})
      setMessages(prev => [...prev, {role:'bot', content: reply, time:t}])
    }, 600)
  }

  const onKeyDown = (e)=>{
    if (e.key === 'Enter' && !e.shiftKey){
      e.preventDefault()
      send()
    }
  }

  return (
    <>

      <div className="chat-wrap">
        <div className="chat-body" ref={scroller} aria-live="polite">
          {messages.length === 0 ? (
            <div className="empty">
              <div>
                <div style={{fontSize:18, fontWeight:800, marginBottom:6}}>무엇을 도와드릴까요?</div>
                <div>궁금한 것을 물어보세요</div>
              </div>
            </div>
          ) : (
            <div style={{maxWidth:800, margin:'0 auto'}}>
              {messages.map((m, i)=>(
                <div key={i} style={{display:'flex', flexDirection:'column', alignItems: m.role==='user'?'flex-end':'flex-start'}}>
                  <div className={`msg ${m.role==='user'?'user':'bot'}`}>{m.content}</div>
                  <div className="time">{m.time}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="input-bar" role="group" aria-label="메시지 입력">
          <input
            className="input"
            placeholder="메시지를 입력하세요…"
            value={text}
            onChange={e=>setText(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="메시지 입력창"
          />
          <button className="send" onClick={send} aria-label="전송">
            <SendIcon/>
          </button>
        </div>
      </div>
    </>
  )
}
