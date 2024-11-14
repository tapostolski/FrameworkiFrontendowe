import { useParams } from "react-router-dom";
import { data } from "../data/module-data.js";
import PersonProfile from "./PersonProfile.jsx";

const PersonProfileGenerator = () => {
const {id} = useParams()  
    return (
        <div> 
            <div>{data.name}</div>
            <div>{data.id}</div>
            <>{data.map(data => (
                <li key={data.id}>
                    ID: {data.id}. Name: {data.name}. Eye colour: {data.eyes}. Birth date: {data.birth}.
                </li>
            ))}</>
            <h1>{}</h1>
        </div>
    );
};

export default PersonProfileGenerator;