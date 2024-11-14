import {useParams} from 'react-router-dom'
import FlexContainer from '../components/FlexContainer';
import ProfileCard from '../components/ProfileCard';
import {data} from '../data/module-data'


function Lab3Page(){
    return(
        <>
            <FlexContainer element ={ProfileCard} data = {data}></FlexContainer>
        </>
    )
}

export default Lab3Page;