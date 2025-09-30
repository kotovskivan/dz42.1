import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Це домашня сторінка</h1>
      <p>Клієнтська маршрутизація працює без перезавантаження браузера.</p>
      <button onClick={() => navigate('/contact')}>Перейти до «Контакти»</button>
    </div>
  )
}
