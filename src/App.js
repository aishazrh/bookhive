import './App.css';
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/header";
import Home from "./components/pages/homepage";
import Browse from "./components/pages/browse";
import Login from "./components/pages/login";
import AppFooter from './components/footer';
import Yasmina from './components/books/yasmina';
import Russo from './components/books/russo';
import Checkout from './components/checkouts/checkout';
import RussoCheckout from './components/checkouts/russo-checkout';
import Orwell from './components/books/orwell';
import OrwellCheckout from './components/checkouts/orwell-checkout';
import King from './components/books/king';
import KingCheckout from './components/checkouts/king-checkout';
import King2 from './components/books/king2';
import King2Checkout from './components/checkouts/king2-checkout';
import Herbert from './components/books/herbert';
import HerbertCheckout from './components/checkouts/herbert-checkout';
import Cline from './components/books/cline';
import ClineCheckout from './components/checkouts/cline-checkout';
import Order from './components/checkouts/order-placed';
import Fitzgerald from './components/books/fitzgerald';
import FitzCheckout from './components/checkouts/fitzgerald-checkout';
import Salinger from './components/books/salinger';
import SalingerCheckout from './components/checkouts/salinger-checkout';

import FavFiction from './components/awards/fav-fiction';
import FavMystery from './components/awards/fav-mystery';
import FavRomance from './components/awards/fav-romance';
import FavFantasy from './components/awards/fav-fantasy';
import FavScifi from './components/awards/fav-scifi';
import FavHorror from './components/awards/fav-horror';
import FavYA from './components/awards/fav-ya';
import FavNonfict from './components/awards/fav-nonfict';

import News from './components/awards/news';
import NotFound from './components/books/book-not-found';

function App() {
  console.log("App component loaded");
  return (
    <div>
      <header>
        <AppHeader />
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/browse/*" element={<Browse />} />
            <Route path="/login" element={<Login />} />
            <Route path='/browse/art/yasmina' element={<Yasmina/>} />
            <Route path='/browse/art/yasmina/checkout' element={<Checkout/>} />
            <Route path='/browse/art/vivienne' element={<Russo/>} />
            <Route path='/browse/art/vivienne/checkout' element={<RussoCheckout/>} />

            <Route path='/browse/classics/1984' element={<Orwell/>} />
            <Route path='/browse/classics/1984/checkout' element={<OrwellCheckout/>} />
            <Route path='/browse/horror/the-shining' element={<King/>} />
            <Route path='/browse/horror/the-shining/checkout' element={<KingCheckout/>} />
            <Route path='/browse/horror/it' element={<King2/>} />
            <Route path='/browse/horror/it/checkout' element={<King2Checkout/>} />

            <Route path='/browse/fiction/gatsby' element={<Fitzgerald/>} />
            <Route path='/browse/fiction/gatsby/checkout' element={<FitzCheckout/>} />
            <Route path='/browse/fiction/catcher' element={<Salinger/>} />
            <Route path='/browse/fiction/catcher/checkout' element={<SalingerCheckout/>} />

            <Route path='/browse/scifi/dune' element={<Herbert/>} />
            <Route path='/browse/scifi/dune/checkout' element={<HerbertCheckout/>} />
            <Route path='/browse/scifi/ready-player-one' element={<Cline/>} />
            <Route path='/browse/scifi/ready-player-one/checkout' element={<ClineCheckout/>} />

            <Route path='/order' element={<Order/>} />

            <Route path='/favorite-fiction' element={<FavFiction/>} />
            <Route path='/favorite-mysteryandthriller' element={<FavMystery/>} />
            <Route path='/favorite-romance' element={<FavRomance/>} />
            <Route path='/favorite-fantasy' element={<FavFantasy/>} />
            <Route path='/favorite-scifi' element={<FavScifi/>} />
            <Route path='/favorite-horror' element={<FavHorror/>} />
            <Route path='/favorite-yafict' element={<FavYA/>} />
            <Route path='/favorite-nonfict' element={<FavNonfict/>} />

            <Route path='/news' element={<News/>} />
            <Route path='/not-found' element={<NotFound/>} />
          </Routes>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
