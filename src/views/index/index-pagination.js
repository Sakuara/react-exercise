import {Pagination} from 'antd';
import qs from 'qs';
import { useLocation,Link } from 'react-router-dom';

export default function IndexPagination() {
    let {search} =useLocation();
    let {tab='all',page=1} =qs.parse(search);
  return (
    <Pagination current={page*1} pageSize={20} total={500} showQuickJumper={false} itemRender={
        (page,type) => {
            switch (type) {
                case 'page':
                    return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                case 'prev':
                    return <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>
                case 'next':
                    return <Link to={`/?tab=${tab}&page=${page}`}>{'>'}</Link>
                default :
                return <Link to={`/?tab=${tab}&page=${page}`}>{'...'}</Link>
            }
        }
    } />
)}