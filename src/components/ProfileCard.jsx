import FlexContainer from "./FlexContainer";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import RatingBar from "./RatingBar";

function ProfileCard({name, id, rating, dispatch}) {
    const [rate, setRate] = useState(rating);
    return(
        <Card key={id} style={{width: "18rem"}} className="m-1">
            <Card.Body>
                <Card.Title> Profile </Card.Title>
                <div>
                    <RatingBar rate={rating} />
                </div>
                <Card.Text>{name}</Card.Text>
                <Button variant="primary" className="ms-1">
                    Edit
                </Button>
                <Button
                    variant="danger"
                    onClick={() =>{
                        dispatch({
                            type: "delete",
                            id: id
                        });
                        
                    }
                }    
                className="ms-1">
                Delete
                </Button>
                <Button
                  variant="success"
                  className="ms-1"
                  onClick={() => {
                    setRate((rating + 1) % 11);
                     dispatch({
                      type: "rate",
                      rating: (rating + 1) % 11,
                      id: id,
                    })
                  }}
                  >
                    Rate
                  </Button>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;