const filled = '★';
const empty = '☆';

function RatingBar({rate}) {
    
    const stars = new Array(10);
    stars.fill(empty);
    for(let i = 0; i < rate; i++){
        stars[i] = filled;
    }
    return (
        <div>
            {stars.map((e,i) => <span key={i}> {e} </span>)}
        </div>
    );
}

export default RatingBar;