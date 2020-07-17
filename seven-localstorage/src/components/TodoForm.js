import React from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
    Container
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please enter a Todo");
        }
        const todo = {
            todoString,
            id: v4()
        }
        //Handle storing todo into localStorage using 'addTodos' method passed into this component by another component
        addTodos(todo);
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
                        placeholder="Enter a Todo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    >
                        <InputGroupAddon type="append">
                            <Button color="dark" onSubmit={handleSubmit}></Button>
                        </InputGroupAddon>
                    </Input>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;