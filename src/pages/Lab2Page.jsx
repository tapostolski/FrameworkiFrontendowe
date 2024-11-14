import {useParams} from 'react-router-dom'
import {data} from '../data/module-data'

function Lab2Page(){
    const { id } = useParams();
    return (  <>
        <h1>Szukana osoba</h1>
        <p>{data.at(id) ? <p> Id: {data.at(id).id} <br/> Name: {data.at(id).name} <br/> Eye colour: {data.at(id).eyes} <br/> Birth date: {data.at(id).birth} </p>: <span>Brak identyfikatora osoby. Nie znaleziono osoby o tym identyfikatorze.</span>}</p>
    </>);
}

export default Lab2Page;