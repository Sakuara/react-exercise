
import {List,Card} from 'antd';
import Style from './topics.module.less';
export default function Reply(props) {
  let {replies,reply_count,loading} = props;
  return (
    <Card loading={loading} headStyle={{background:'#f6f6f6',marginTop:'20px'}} title={`${reply_count} 回复`}>
      <List
        style={{background:'#fff'}}
        dataSource={replies}
        renderItem={item => (
          <List.Item>
            <div style={{padding:'0 20px'}} className={Style.markdownImg} dangerouslySetInnerHTML={{
            __html: item.content
          }}>
            </div>
          </List.Item>
        )}
      >
      </List>
    </Card>
    )
}