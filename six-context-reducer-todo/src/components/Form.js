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
    return (
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                    //TODO: value, onChange
                    />
                    <InputGroupAddon
                        addonType="append"
                    >
                        <Button
                            color="info"
                            //TODO: onClick
                            >Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;