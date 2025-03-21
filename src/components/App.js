import { Contact, Events, Header, Home, Gallery } from ".";


function App() {
  return (
    <div className='w-full flex flex-col justify-center min-h-screen xl:w-full py-32 px-4 -z-15 lg:py-16 '>
      <Header></Header>
      <div className="lg:px-16 ">
      <Home></Home>
      <Events></Events>
      <Gallery/>
      <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
