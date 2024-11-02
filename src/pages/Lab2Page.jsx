import {useParams} from 'react-router-dom'
import {data} from '../data/module-data'

function Lab2Page(){
    const { id } = useParams();
    return (  <>
        <h1>Szukane imię</h1>
        <p>{data.at(id) ? data.at(id).name : <span>Brak identyfikatora osoby. Nie znaleziono osoby o tym identyfikatorze.</span>}</p>
    </>);
}

export default Lab2Page;