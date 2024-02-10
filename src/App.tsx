import "./App.module.scss";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.tsx";
import CallbackModal from "./components/modals/CallbackModal/CallbackModal.tsx";

function App() {
  return (
    <HeaderLayout>
      <CallbackModal />
    </HeaderLayout>
  );
}

export default App;
