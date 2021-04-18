import {Card} from 'antd';
import Style from './topics.module.less';
export default function Topic(props) {
  let {id,data,title} = props;
  return (
    <Card title={title}>
      <div className={Style.markdownImg} dangerouslySetInnerHTML={{
          __html:data}
      }></div>
    </Card>
    )
}