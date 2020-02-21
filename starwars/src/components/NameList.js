import React, {useState, useEffect} from "react";
import NameCard from "./NameCard";
import axios from "axios";
import { Container, Row } from "reactstrap";

export default function NameList() {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log(response.data);
                setPerson(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])
    return (
        <Container>
            <Row>
                {person.map((p, id) => {
                    return (
                        <NameCard key={id} p={p} />
                    )
                })}
            </Row>
        </Container>
    )
}