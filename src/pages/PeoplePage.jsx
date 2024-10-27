import {useParams} from 'react-router-dom'
import {data} from '../data/module-data'

function PeoplePage() {
    const { id } = useParams();
    return (  <>
        <h1>Szukane imię</h1>
        <p>{data.at(id).name ? data.at(id).name : <span>Brak takiego imienia</span>}</p>
    </>);
}

export default PeoplePage;