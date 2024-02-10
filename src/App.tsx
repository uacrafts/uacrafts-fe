import "./App.module.scss";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.tsx";
import CallbackModal from "./components/modals/CallbackModal/CallbackModal.tsx";
import Main from "./components/Main/Main.tsx";

function App() {
  return (
    <>
      <HeaderLayout>
        <Main />
      </HeaderLayout>
    </>
  );
}

export default App;
