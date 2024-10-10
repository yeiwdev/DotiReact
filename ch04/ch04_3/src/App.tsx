import ArrayState from "./pages/ArrayState";
import BasicForm from "./pages/BasicForm";
import HigherOrderRadioInput from "./pages/HigherOrderRadioInput";
import InputTest from "./pages/InputTest";
import NumberState from "./pages/NumberState";
import ObjectState from "./pages/ObjectState";
import RadioInputTest from "./pages/RadioInputTest";
import ShowHideModal from "./pages/ShowHideModal";

export default function App() {
  return (
    <div>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInput />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </div>
  );
}
