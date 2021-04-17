import {Menu} from 'antd';
import { indexNav } from '../../router';
import {Link, useLocation} from 'react-router-dom';
let parse = require('url').parse;
export default function Nav() {
    let {search} =useLocation();
    let {query} =parse(search,true);
    let tab = query === null?'all':query.tab;
    let activeIndex = indexNav.findIndex(item => item.url.split('=')[1] === tab )
  return (
    <Menu mode="horizontal" defaultSelectedKeys={`${activeIndex}`}>
      {
          indexNav.map((item,index) => {
              return (
                  <Menu.Item key={index}>
                      <Link to={item.url}>{item.name}</Link>
                  </Menu.Item>
              )
          })
      }
    </Menu>
    )
}