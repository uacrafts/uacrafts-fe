import './App.module.scss'
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.tsx";
import Main from "./components/Main/Main.tsx";


function App() {

  return (
      <>
          <HeaderLayout>
                <Main />
          </HeaderLayout>
      </>
  )
}

export default App
