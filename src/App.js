import { Route } from "react-router";
import { routes } from "./router";

function App(props){
  return (
    <>
      {
        routes.map(r => {
          return <Route exact={r.exact} path={r.path} render={r.render} key={r.id}></Route>
        })
      }
    </>
  )
}

export default App;
