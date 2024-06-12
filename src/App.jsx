
import Nav from './components/Nav'
import Hero from './components/Hero'
import Quality from './components/Quality'
import Products from './components/Products'
import Services from './components/Services'
import Offer from './components/Offer'
import Reviews from './components/Reviews'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'


function App() {
  return (
    <>

    <main className=' font-palanquin  x3:mx-[1rem] x4:mx-[1.2rem] x5:mx-[1.6] x6:mx-[2.2rem] m7:mx[2.8] m8:mx-[3.5rem] m9:mx-[4rem] lg:mx-[5rem] wide:mx-[10rem] '>
      <Nav />
      <Hero />
      <Products />
      <Quality />
      <Services />
      <Offer />
    </main>
    <section className=''>
      <Reviews />
      <Subscribe />
      <Footer />
    </section> 
    </>
  )
}

export default App
