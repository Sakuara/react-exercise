import {useEffect,Fragment} from 'react'
import {List} from 'antd'
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Li from './li';
import IndexPagination from './index-pagination';

let parse = require('url').parse;
function IndexList() {
    let getData = useTopicsList();
    let {loading,data} =useSelector(state => (state.list));
    let {search} =useLocation();
    let {tab,page} =parse(search,true).query;
    let {push} = useHistory()
    if(!tab) tab = 'all';
    if(!page) page = 1;
    useEffect(() => {
        getData(tab,page)
    }, [tab,page])
  return (
      <Fragment>
        <List
            style={{background:'#fff'}}
            size="small"
            itemLayout="vertical"
            dataSource={data}
            loading={loading}
            split={true}
            renderItem={(rowData) => {
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
        {
            loading?'':<IndexPagination />
        }
        
    </Fragment>
    )
}

export default IndexList;