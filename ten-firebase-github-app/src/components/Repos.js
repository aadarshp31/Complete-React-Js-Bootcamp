import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([])
    
    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url);
        setRepos(data);
    }

    useEffect(() => {
        fetchRepos();
    }, [repos_url])

    return(
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">Name: {repo.name}</div>
                    <div className="text-primary">Description: {repo.description}</div>
                    <div className="text-primary">Link: {repo.html_url}</div>
                    <div className="text-secondary">Languages: {repo.language}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default Repos;
