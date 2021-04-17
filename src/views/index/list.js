import {useEffect} from 'react'
import {List} from 'antd'
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action';
import { Link, useLocation } from 'react-router-dom';
import Li from './li';
let parse = require('url').parse;
function IndexList() {
    let getData = useTopicsList();
    let {loading,data} =useSelector(state => (state.list));
    let {search} =useLocation();
    let {tab,page} =parse(search,true).query;
    if(!tab) tab = 'all';
    if(!page) page = 1;
    console.log(loading)
    useEffect(() => {
        getData(tab,page)
    }, [tab,page])
  return (
    <List
        style={{background:'#fff'}}
        size="small"
        itemLayout="vertical"
        dataSource={data}
        loading={loading}
        split={true}
        pagination={{
            pageSize:20,
            position:'bottom'
        }}
        renderItem={(rowData) => {
            console.log(rowData)
            return (
                <List.Item>
                    <Link to={`/topic/${rowData.id}`}>
                        <Li data={rowData}/>
                    </Link>
                </List.Item>
            )
        }}
    >
    </List>
    )
}

export default IndexList;