import AboutPage from "../views/about";
import GetStartPage from "../views/getstart";
import IndexPage from "../views/index";
import TopicsPage from "../views/topics";
import UserPage from "../views/user";
const routes = [
    {
        id: 0,
        name: '首页',
        path: '/',
        exact: true,
        render: (props) => {
            return <IndexPage {...props}/>
        }
    },
    {
        id: 1,
        name: '新手入门',
        path: '/getstart',
        exact: true,
        render: (props) => {
            return <GetStartPage {...props}/>
        }
    },
    {
        id: 2,
        name: '主题详情',
        path: '/topic/:id',
        exact: true,
        render: (props) => {
            return <TopicsPage {...props}/>
        }
    },
    {
        id: 3,
        name: '用户详情',
        path: '/user/:loginname',
        exact: true,
        render: (props) => {
            return <UserPage {...props}/>
        }
    },
    {
        id: 4,
        name: '关于',
        path: '/about',
        exact: true,
        render: (props) => {
            return <AboutPage {...props}/>
        }
    },
]

const nav = [
    {
        name: '首页',
        path: '/'
    },
    {
        name: '新手入门',
        path: '/getstart'
    },
    {
        name: '关于',
        path: '/about'
    },
]

export {routes,nav};