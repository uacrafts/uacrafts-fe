import "./App.module.scss";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.tsx";
import Main from "./components/Main/Main.tsx";
import CallbackModal from "./components/modals/CallbackModal/CallbackModal.tsx";

function App() {
  return (
    <>
      <HeaderLayout>
        <Main />
        <CallbackModal />
      </HeaderLayout>
    </>
  );
}

export default App;
