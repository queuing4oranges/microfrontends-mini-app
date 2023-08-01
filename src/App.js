import { Humanize, MyButton } from "asab-webui-components";
import "asab-webui-components/src/styles/index.scss";

function App() {
  return (
    <div className="container humanize mt-5">
        <h1>Humanized Number:</h1>
        <Humanize value={1000} />
        <MyButton/>
    </div>
  );
}

export default App;
