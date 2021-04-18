import {Card} from 'antd';
import Style from './topics.module.less';
export default function Topic(props) {
  let {id,data,title,loading} = props;
  return (
    <Card loading={loading} title={title} loading={loading}>
      <div className={Style.markdownImg} dangerouslySetInnerHTML={{
          __html:data}
      }></div>
    </Card>
    )
}