export function topic(topic={
    loading: true,
    data: []
},action){
    switch (action.type) {
        case "topic_loading":
            return {loading: true,data:[]}
        case "topic_loadover": 
            return {
                loading: false,
                data: action.data
            }
    }
    return topic;
}