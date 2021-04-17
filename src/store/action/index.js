import { useDispatch } from "react-redux"
import http from '../http';

function useTopicsList(){
  let dispatch = useDispatch();
  // dispatch({type: 'list_loading'}) if u dispatch something here, u will find in list page, will cause the problem rendered infinite loop
  return function(tab="all",page=1,limit=20,mdrender=true){
    dispatch({type: 'list_loading'})
    http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res) => {
      if(res.status == 200){
        dispatch({type: 'list_loadover',data:res.data.data})
      }
    })
  }
}

export {useTopicsList}