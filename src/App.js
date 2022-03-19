import Test from "./components/Test";
import Test2 from "./components/Test2";
function App() {
  const p={name:'yu',age:18}
  return (
    <div className="App">
     <Test {...p}/>
     <Test2 name='yu' age={18}/>
    </div>
  );
}

export default App;
