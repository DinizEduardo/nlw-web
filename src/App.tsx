import { Habit } from './components/Habit'

import './styles/global.css'

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={6} />
      <Habit completed={9} />
    </>
  )
}

export default App
