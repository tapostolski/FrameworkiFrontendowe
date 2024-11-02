import { data } from "../data/module-data.js";
import PersonProfile from "./PersonProfile.jsx";

const PersonProfileGenerator = () => {
    return (
        <div> 
            <div>{data.name}</div>
            <div>{data.id}</div>
            <>{data.map(data => (
                <li key={data.id}>
                    ID: {data.id}. Name: {data.name}
                </li>
            ))}</>
            <h1>{}</h1>
        </div>
    );
};

export default PersonProfileGenerator;