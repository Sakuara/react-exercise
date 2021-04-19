import {Layout,Row,Col,Menu,Affix} from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { nav } from '../router';

function Header(){
    let {pathname} = useLocation();
    let activeIndex = nav.findIndex(item => item.path === pathname);
    return(
        <Affix offsetTop={0}>
            <Layout.Header>
                <Row>
                    <Col span={4}>
                        <h1 style={{color:'#fff'}}>Cnode</h1>
                    </Col>
                    <Col span={20}>
                        <Menu theme="dark" mode="horizontal" selectedKeys={[`${activeIndex}`]}>
                            {
                                nav.map((item,index) => {
                                    return (<Menu.Item key={index}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </Menu.Item>)
                                })
                            }
                        </Menu>
                    </Col>

                </Row>
            </Layout.Header>
        </Affix>
    )
}

export default Header;