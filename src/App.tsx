import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

function App() {
  const personName = {
    first: 'Ivan',
    last: 'Kunev'
  }

  const nameList = [
    {
      first: 'Ivan',
      last: 'Kunev'
    },
    {
      first: 'Maria',
      last: 'Lazarova'
    },
    {
      first: 'Stoyan',
      last: 'Georgiev'
    }
  ]
  return (
    <div className="App">
      <Greet name='Kunev' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  )
}

export default App
