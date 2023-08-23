import { useCallback, useState } from 'react';
import './App.css';
import { AsideMenu, AsideMenuVariant } from './components/aside-menu';

function App() {

  const [menuVariant, setVariant] = useState<AsideMenuVariant>("minimized")
  const [menuOpen, setMenuOpen] = useState(false)

  const onButtonClick = useCallback(() => {
    setVariant((current) => {
      return current === "full" ? "minimized" : "full"
    })
  }, [])


  return (
    <div className="App">
    <button className='float-right' onClick={onButtonClick}>toggle menu variant</button>
    <button className='float-right' onClick={() => setMenuOpen(!menuOpen)}>toggle menu</button>
      <AsideMenu variant={menuVariant} open={menuOpen} />
    </div>
  );
}

export default App;
