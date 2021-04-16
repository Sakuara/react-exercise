import {Layout,Row,Col,Menu} from 'antd'
import { Link } from 'react-router-dom'
import { nav } from '../router';

function Header(){
    return(
        <>
            <Layout.Header>
                <Row>
                    <Col span={4}>
                        <h1>Cnode</h1>
                    </Col>
                    <Col span={20}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
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
        </>
    )
}

export default Header;