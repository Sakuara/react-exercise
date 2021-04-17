import {Image,Tag,Row,Col} from 'antd';
import LiStyle from './li.module.less';
export default function Li(props) {

  let {author,title,reply_count,visit_count,last_reply_at,create_at,tab,top,good} = props.data;
  let {avatar_url} = author;
  let timestap = setTime(last_reply_at,create_at);
  let tag=setTag(tab,top,good);
  return (
    <>
      <Row align={"middle"} wrap={false} justify={"space-between"}>
        <Col span={21} flex={1} className={LiStyle.flex}>
            <Image width={30} src={avatar_url}/> 
            <span style={{paddingLeft:'5px'}}>{reply_count}</span>
            <em>/</em>
            <span>{visit_count}</span>
            <Tag color={top || good?'success':'default'} style={{marginLeft:'10px'}}>{tag}</Tag>
            {title}
        </Col>
        <Col offset={1} span={2} style={{textAlign:'right'}}>
            {timestap};
        </Col>
      </Row>
    </>
    )
}
function setTime(lt,ct){
    let hour = 3600*1000;
    let lastT = new Date(lt).getTime();
    let createT = new Date(ct).getTime();
    let timeDec = lastT -createT;
    return timeDec>=hour*24?`${new Date(timeDec).getDay()+1}天前`:timeDec<hour?`${new Date(timeDec).getMinutes()}分钟前`:`${new Date(timeDec).getHours()}小时前`;
}

function setTag(tab,top,good){
    let patch = {ask:'问答',share:'分享',job:'招聘',dev:'测试'}
    if(top) return '置顶'
    if(good) return '精华'
    return patch[tab]
    ;
}