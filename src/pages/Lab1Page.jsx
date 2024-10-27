import {data} from '../data/module-data'

const NameItem = ({name, id}) => <li key={id}>{name}</li>

function Lab1Page(){
    return (
        <>
        <h1>Laboratorium 1</h1>
            <ul>
                {data.map((o, i) => <NameItem name={o.name} id={o.id}/>)}
            </ul>
        </>
    );
}

export default Lab1Page;