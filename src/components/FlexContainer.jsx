import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

const FlexContainer = ({element, data}) => {
    const [items] = useReducer(AppReducer, data)
    return (
        <div className="d-flex justify-content-center flex-wrap mt-3">
            {items.map(item => element({item}))}
        </div>
    )
}

export default FlexContainer;