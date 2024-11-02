import { data } from "../data/module-data";


const PersonProfile = () => {
    return (
    <div> 
        <div> {data.id} </div>
        <div> {data.name} </div>
    </div>
    
    );
}

export default PersonProfile;