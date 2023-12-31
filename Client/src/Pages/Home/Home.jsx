import Left_Menu from "../../Componets/Left_Menu/Left_Menu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main_Content from "../../Componets/Main_Content/Main_Content";
import Right_Menu from "../../Componets/Right_Menu/Right_Menu";

const Home = () => {
    return (
        <div>
            <Container>
                <Row className="g-4">
                    <Col md={3}>
                        <Left_Menu></Left_Menu>
                    </Col>
                    <Col md={6}>
                        <Main_Content></Main_Content>
                    </Col>
                    <Col md={3}>
                        <Right_Menu></Right_Menu>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;