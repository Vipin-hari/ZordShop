// import { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

// // Components
// import Navigation from './components/Navigation';
// import Section from './components/Section';
// import Product from './components/Product';
// import Buy from './components/Buy';

// // ABIs
// import Zordshop from './abis/Zordshop.json';

// // Config
// import config from './config.json';

// import { Footer } from './components/Footer';
// // import Buy from './components/Buy';

// function App() {
//   const [provider, setProvider] = useState(null)
//   const [zordshop, setZordshop] = useState(null)

//   const [account, setAccount] = useState(null)

//   const [Women, setWomen] = useState(null)
//   const [Men, setMen] = useState(null)
//   const [Accessories, setAccessories] = useState(null)

//   const [item, setItem] = useState({})
//   const [toggle, setToggle] = useState(false)

//   const togglePop = (item) => {
//     setItem(item)
//     toggle ? setToggle(false) : setToggle(true)
//   }

//   const loadBlockchainData = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     setProvider(provider)
//     const network = await provider.getNetwork()

//     const zordshop = new ethers.Contract(config[network.chainId].zordshop.address, Zordshop, provider)
//     setZordshop(zordshop)

//     const items = []

//     for (var i = 0; i < 9; i++) {
//       const item = await zordshop.items(i + 1)
//       items.push(item)
//     }

//     const Women = items.filter((item) => item.category === 'Women')
//     const Men = items.filter((item) => item.category === 'Men')
//     const Accessories = items.filter((item) => item.category === 'Accessories')

//     setWomen(Women)
//     setMen(Men)
//     setAccessories(Accessories)
//   }

//   useEffect(() => {
//     loadBlockchainData()
//   }, [])

//   return (
//     <>
//       <div>
//         <Navigation account={account} setAccount={setAccount} />
//         {/* <Buy /> */}
//         <h2>Zordshop Best Sellers</h2>

//         {Women && Men && Accessories && (
//           <>
//             <Section title={"Men"} items={Men} togglePop={togglePop} />
//             <Section title={"Women"} items={Women} togglePop={togglePop} />
//             <Section title={"Accessories"} items={Accessories} togglePop={togglePop} />
//           </>
//         )}

//         {toggle && (
//           <Product item={item} provider={provider} account={account} zordshop={zordshop} togglePop={togglePop} />
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from 'react';
import NewPage from './NewPage';
import Buy from './components/Buy';

function App () {
  return (
    <div>
      <NewPage/>
      {/* <Buy/> */}
    </div>
  )
}

export default App;