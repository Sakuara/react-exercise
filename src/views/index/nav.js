import {Menu} from 'antd';
import { indexNav } from '../../router';
import {Link, useLocation} from 'react-router-dom';
import qs from 'qs';
export default function Nav() {
    let {search} =useLocation();
    let query =qs.parse(search.slice(1));
    let tab = query.tab || 'all';
    let activeIndex = indexNav.findIndex(item => item.url.split('=')[1] === tab )
    console.log(activeIndex)
  return (
    <Menu mode="horizontal" defaultSelectedKeys={`${activeIndex}`} selectedKeys={`${activeIndex}`}>
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