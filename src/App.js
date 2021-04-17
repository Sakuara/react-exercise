import { Route, Switch } from "react-router";
import { routes } from "./router";
import {Layout} from 'antd';
import Header from './component/header';
import Footer from './component/footer';

function App(props){
  return (
    <Layout>
      <Header />
      <Layout.Content style={{padding:'10px 50px'}}>
        <Switch>
          {
            routes.map(r => {
              return <Route exact={r.exact} path={r.path} render={r.render} key={r.id}></Route>
            })
          }
        </Switch>
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

export default App;
