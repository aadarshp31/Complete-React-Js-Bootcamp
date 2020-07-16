import React, { useState, useContext } from "react";
import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";
import {
    FormGroup,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,

} from "reactstrap";

const TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a Todo!");
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("");
    }
    return (
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        value={todoString}
                        placeholder="Add a todo"
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon
                        addonType="append"
                    >
                        <Button
                            color="dark"
                            onClick={handleSubmit}
                            className="addtodo-btn"
                        >Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;