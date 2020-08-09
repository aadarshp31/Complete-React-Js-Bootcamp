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
  Form,
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

  const fetchGithubUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(data)
    } catch (err) {
      toast(err.message, {
        type: "error",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGithubUser();
  };

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <Form>
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
                <Button color="primary" type="submit" onClick={fetchGithubUser}>
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {user ? <UserCard user={user} /> : null }
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null }</Col>
      </Row>
    </Container>
  );
};

export default Home;
