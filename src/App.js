import { Route } from "react-router";
import { routes } from "./router";
import {Layout} from 'antd';
import Header from './component/header';
import Footer from './component/footer';
function App(props){
  return (
    <Layout>
      <Header />
      {
        routes.map(r => {
          return <Route exact={r.exact} path={r.path} render={r.render} key={r.id}></Route>
        })
      }
      <Footer />
    </Layout>
  )
}

export default App;
