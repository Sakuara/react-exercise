export function list(list={
    loading: true,
    data: []
},action){
    switch (action.type) {
        case "list_loading":
            return {loading: true,data:[]}
        case "list_loadover": 
            return {
                loading: false,
                data: action.data
            }
    }
    return list;
}