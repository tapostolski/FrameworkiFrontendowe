import {data} from '../data/module-data'

const NameItem = ({name, id}) => <li key={id}>{name}</li>

function Lab1Page(){
    return (
        <>
        <h1>Laboratorium 1</h1>
            <ul>
                {data.map((o) => <NameItem  id={o.id} name={o.name}/>)}
            </ul>
        </>
    );
}

export default Lab1Page;