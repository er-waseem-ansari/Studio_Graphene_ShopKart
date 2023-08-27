import './App.css';
import BottomPage from './bottom_page/bottom_page';
import Header from './header/header';
import Landing_Page from './landing_page/landing_page';
import Navigation from './navigation/navigation'
import ProductListing from './product_listing/product_listing';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='top_page'>
        <Navigation/>
        <Landing_Page/>
        <ProductListing/>
      </div>
      <BottomPage/>
    </div>
  );
}

export default App;
