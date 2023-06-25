import React from "react";
// @ts-ignore
import Counter from "./counter/index.tsx";
// @ts-ignore
import Name from "./name/index.tsx";
// @ts-ignore
import Rikmorty from "./rikmorty/index.tsx";


class App extends React.Component {

  render() {
    return <div>
      <Counter />
      <Name />
      <Rikmorty />
    </div>
  }
}



export default App;
