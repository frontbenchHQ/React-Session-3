import { Container, Card, Button } from 'react-bootstrap';
import { ProjectList } from '../../common/ProjectList';

/**

Steps

1. Create a page container

2. create static cards

*/


export const Project = () => {

    const items = ProjectList.map(item => {
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>   {item.name} </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Project Link </Button>
            </Card.Body>
        </Card>
        )
    });

    return (
        <Container fluid style={{display : "flex", flexDirection : "row"}}>

                {items}
        
        </Container>
    );
}

