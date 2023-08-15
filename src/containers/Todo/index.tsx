import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader, Heading } from "@chakra-ui/react";

import { TodoInput, TodoList } from "../../components/Todo";
import { TodoType } from "../../types";

function Todo() {

    const [todos, setTodos] = useState<TodoType[]>([]);

    return (
        <Card align='center' width={500}>
            <CardHeader>
                <Heading size='md'>Todo List</Heading>
            </CardHeader>
            <CardBody>
                <TodoInput todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
            </CardBody>
            <CardFooter />
        </Card>
    );
}

export default Todo;