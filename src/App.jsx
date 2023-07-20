import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quote from './components/Quote';
import Loading from './components/Loading';
import TimeChecker from './hooks/TimeChecker';
import GetAldrin from './components/GetAldrin';

function App() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  const getQuote = async () => {
    var category = 'inspirational'
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
      method: "GET",
      headers: {
        'X-Api-Key': 'F4/loGHatIMpLJw7FHk6Og==Qy29hzU8vgeE8Dh6'
      }
    });
    const quote = await response.json();
    setQuote(quote[0]);
  }

  useEffect(() => {
    getQuote();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (
    <>
      <div>
        {TimeChecker() ? <GetAldrin /> : (
          loading ? <Loading /> : <Quote quote={quote?.quote} author={quote?.author} />
        )}
      </div>
    </>
  )
}

export default App
