import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useTopic } from '../../store/action';
import Topic from './topic';
import {useEffect} from 'react';
import Reply from './reply';

export default function TopicsPage() {
  let getData = useTopic();
  let {loading,data} = useSelector(state => state.topic)
  let {title,replies,reply_count} = data;
  let {id} = useParams()
  useEffect(() => {
    getData(id);
  }, [id])
  return (
    <>
      <Topic id={id} data={data.content} title={title} loading={loading}/>
      <Reply replies={replies} reply_count={reply_count} loading={loading}/>
    </>
    )
}