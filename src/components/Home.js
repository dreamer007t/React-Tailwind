import logo from '../logo.svg';
import SignUp from './SignUp'
import HeroSection from './HeroSection'
import ThreeDsection from './ThreeDsection'
import CallToAction from './CallToAction'
import ContactForm from './ContactUs';
import { Canvas } from '@react-three/fiber'

function App() {
  const name = "Rabsun";
  const isUderLoggedIn = false;
  return (<>
    <HeroSection />
    <div className='h-full w-full absolute top-20 flex justify-center mx-auto'>
      {/* <Canvas>
        <ThreeDsection />
      </Canvas> */}
      <h1 className="main-text text-8xl text-blue-400 font-bold  content-center">Icetena</h1>
    </div>
    <CallToAction />
    
    <div className='Header '>
      {isUderLoggedIn ?(
        <>
          <h1 className='text-3xl font-bold underline'>Icetena {name}</h1>
        </>):(
          <>
            <ContactForm/>
          </>
      )}
    </div>
  </>
  )
}

export default App;
