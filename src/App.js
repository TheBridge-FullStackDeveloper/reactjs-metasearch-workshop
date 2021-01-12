import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Finder from './components/Finder'
import Product from './components/Product'

import './App.css'

const App = () => {
  const [results, setResults] = useState([])

  const drawResults = () => {
    return results.map(product => (
      <Product data={product} />
    ))
  }

  const loadResults = () => {
    setResults([
      {
        product: "Microsoft Surface Laptop 3 Negro",
        image: "https://thumb.pccomponentes.com/w-530-530/articles/26/268283/microsoft-surface-laptop-3-negro-intel-core-i7-1065g7-16gb-512gb-ssd-135-tactil.jpg",
        cost: 2344.38,
        shopLink: "https://www.pccomponentes.com/microsoft-surface-laptop-3-negro-intel-core-i7-1065g7-16gb-512gb-ssd-135-tactil"
      },
      {
        product: "Apple MacBook Pro Portátil 16\"",
        image: "https://www.alternate.es/p/230x230/9/Apple_MacBook_Pro_Port_til_40_6_cm__16___3072_x_1920_Pixeles_9na_generaci_n_de_procesadores_Intel__Core__i7_16_GB_DDR4_SDRAM_512_GB_SSD_AMD_Radeon_Pro_5300M_Wi_Fi_5__802_11ac__macOS_Catalina_Gris@@9ap2d2d2.jpg",
        cost: 2454.00,
        shopLink: "https://www.alternate.es/Apple/MacBook-Pro-Port%C3%A1til-40-6-cm-(1Zoll)-3072-x-1920-Pixeles-9na-generaci%C3%B3n-de-procesadores-Intel-Core-i7-16-GB-DDR4-SDRAM-512-GB-SSD-AMD-Radeon-Pro-5300M-Wi-Fi-5-(802-11ac)-macOS-Catalina-Gris/html/product/1576341"
      },
      {
        product: "Asus Zenbook Flip UX363EA-EM189T",
        image: "https://www.efecto2000.es/545216-large_default/asus-ux363ea-em189t-i7-1165g7-16gb-512ssd-w10-13.jpg",
        cost: 1411.50,
        shopLink: "https://www.efecto2000.es/prod/ordenadores-portatiles/208015-asus-ux363ea-em189t-i7-1165g7-16gb-512ssd-w10-13-4718017875295.html"
      }
    ])
  }
  
  return (
    <div className="App">
      <Header />
      
      <Finder loadResults={loadResults} />

      <section>
        {drawResults()}
      </section>

      <Footer />
    </div>
  )
}

export default App
