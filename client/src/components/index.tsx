import React from "react";
// @ts-ignore
import Counter from "./counter/index.tsx";
// @ts-ignore
import Name from "./name/index.tsx";
// @ts-ignore
import Rikmorty from "./rikmorty/index.tsx";
// @ts-ignore
import Main from "./main/index.tsx";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import Header from "./header/index.tsx";


class App extends React.Component {

  render() {
    return <div>
      <Header />

      <Main>
        <Routes>
          <Route path={'/first'} element={<Counter />} />
          <Route path={'/second'} element={
            <div>
              <React.Fragment>
                <Name />
                <Rikmorty />
              </React.Fragment>
            </div>}
          />
        </Routes>
      </Main>

      <div>footer</div>
    </div>
  }
}



export default App;
