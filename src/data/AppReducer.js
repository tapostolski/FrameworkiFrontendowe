export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state;
        case "rate": {
            const id = action.id;
            return state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        rating: item.rating >= 10 ? 1 : item.rating + 1
                    };
                }
                return item;
            });
        }
        case "delete":{
            return state; 
        }       
    }
}
