import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

const FlexContainer = ({element, data}) => {
    const [items, dispatch] = useReducer(AppReducer, data)
    const itemsWithDispatch = [];
    for(var i = 0; i < items.length; i++){
        var tempItem = items[i]
        tempItem.dispatch = dispatch
        itemsWithDispatch.push(tempItem)
    }
    return (
        <div className="d-flex justify-content-center flex-wrap mt-3">
            {itemsWithDispatch.map(item => element(item))}
        </div>
    )
}

export default FlexContainer;