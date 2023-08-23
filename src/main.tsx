import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <div className='w-full h-screen flex flex-col bg-main-purple' >

      <App />
    </div>
  </>,
)
