import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchGithubUser = async () => {
    try {
      const { data } = Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (err) {
      toast(err.message, {
        type: "error",
      });
    }
  };

  const handleSubmit = () => {
    fetchGithubUser();
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Please provide the username"
              autoFocus
              required
            />
            <InputGroupAddon addonType="append">
              <Button color="primary">Fetch User</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md="7"></Col>
      </Row>
    </Container>
  );
};

export default Home;
