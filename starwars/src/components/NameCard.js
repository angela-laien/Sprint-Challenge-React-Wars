import React from "react";
import styled from "styled-components";
import { 
    Col, Card, CardTitle, CardBody, CardText, 
} from "reactstrap";

const H1 = styled.h1`
    @import url("https://fonts.googleapis.com/css?family=Montserrat+Subrayada&display=swap");
    font-family: "Montserrat Subrayada", sans-serif;
    font-size: 1rem;
    color: darkorange;
`;

const Box = styled.div`
    color: sienna;
    border: 2px solid brown;
    width: 100%;
    margin: 0% 0% 5% 0%;
`;
const NameCard = props => {
    return (
        <Col xs="6" md="4" xl="3">
            <Box>
                <Card>
                    <CardBody>
                        <CardTitle><H1>{props.p.name}</H1></CardTitle>
                        <CardText>Gender: {props.p.gender}</CardText>
                        <CardText>Birthday: {props.p.birth_year}</CardText>
                    </CardBody>
                </Card>
            </Box>
        </Col>
    );
};

export default NameCard;