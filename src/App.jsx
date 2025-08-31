import Navbar from "./component/Navbar/Navbar"
import Hero from "./component/Hero/Hero"
import Topics from "./component/Topics/Topics"
import News from "./component/News/News"
import Multimedia from "./component/Multimedia/Multimedia"
import Nasa from "./component/Nasa/Nasa"
import Footer from "./component/Footer/Footer"
import NewsTopics from "./component/NewsTopics/NewsTopics"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"



function App() {
 

  return (
    <>
      <BrowserRouter>

        <Navbar />
        
        
        
          <main>
            <Routes>

              <Route path="/" element={

                  <>
                    <Hero />
                    <Topics />
                  </>

              } />

              <Route path="/News" element={

                  <>
                    <News />
                    <NewsTopics />
                  </>

              } />

              <Route path="/Multimedia" element={

                  <>
                    <Multimedia />
                  </>

              } />
              
              <Route path="/Nasa" element={

                  <>
                    <Nasa />
                  </>

              } />


              

            </Routes>
          </main>  

          <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
