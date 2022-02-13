import ChildComponent from "./components/ChildComponent";
import SampleProvider from "./SampleProvider";

function App() {
  return (
    <SampleProvider>
      <ChildComponent />
    </SampleProvider>
  );
}

export default App;
