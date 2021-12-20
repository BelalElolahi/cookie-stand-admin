import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/Headr'
import {useState} from 'react'
export default function Home() {
  
  const [show, setShow] = useState('')
  const [location, setlocation] = useState('')
  const [min, setmin] = useState(0)
  const [max, setmax] = useState(0)
  const [avg, setavg] = useState(0)
  const [Branches, setBranch] = useState([])


  function formHandler(event) {
    event.preventDefault()



    const Branche = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      avgCookies: event.target.avg.value
    }



    setShow((show) => {
      return JSON.stringify(Branche)
    })
    setlocation(() => {
      return Branche.location
    })
    setmin(() => {
      return Branche.min
    })
    setmax(() => {
      return Branche.max
    })
    setavg(() => {
      return Branche.avg
    })


    setBranch((Branches) => {
      Branches.push(Branche)
      return Branches
    });

  }
  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div>
          <form className='p-6 bg-green-300 rounded-2xl' onSubmit={formHandler} >
            <h2>Create Cookie Stand</h2>
            <label>location</label>
            <input type="text" name='location' className='w-9/12 my-3 bg-gray-200' placeholder={location} ></input>
            <div className='flex flex-row'>
              <div className='flex flex-col p-3'>
                <label>Minimum customer per Hour</label>
                <input type="number" name='min' className='bg-white' placeholder={min} ></input>
              </div>
              <div className='flex flex-col p-3'>
                <label>Maximum customer per Hour</label>
                <input type="number" name='max' className='bg-white' placeholder={max} ></input>
              </div>
              <div className='flex flex-col p-3'>
                <label>Avarage Cookies per sale</label>
                <input type="number" name='avg' className='bg-white' step='.1' placeholder={avg}></input>
              </div>
              <div className='flex flex-col px-3 '>
                <button className='px-8 py-4 bg-green-600' type="submit" >create</button>
              </div>
            </div>

          </form>
          <br />
          <p>
            Report Table Coming Soon...
          </p>
          <br />

        </div>
        <div>
          <p>{show}</p>
        </div>
      </main>
      <Footer></Footer>

    </div>
  )
}