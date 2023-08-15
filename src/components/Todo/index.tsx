import { FormEvent, Fragment, useState } from "react";
import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, IconButton, Input, Stack } from "@chakra-ui/react";

import { TodoType } from "../../types";

type TodoInputProps = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export const TodoInput: React.FC<TodoInputProps> = ({ todos, setTodos }) => {

    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    // todoの追加
    const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!inputVal) {
            return;
        }

        const newTodo: TodoType = {
            id: todos.length,
            inputValue: inputVal,
            checked: false,
        };

        setTodos([newTodo, ...todos]);
        setInputVal("");
    };

    return (
        <form onSubmit={(e) => handleInputSubmit(e)}>
            <Stack direction='row' spacing={5} marginBottom={10}>
                <Input
                    placeholder='input your todo'
                    value={inputVal}
                    onChange={(e) => handleInputChange(e)}
                />
                <Button leftIcon={<AddIcon />} colorScheme='teal' variant='solid' type='submit'>
                    Add
                </Button>
            </Stack>
        </form>
    );
}

type TodoListProps = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

    // todoのチェック
    const handleChecked = (id: number) => {

        const deepCopy = todos.map((todo) => ({ ...todo }));

        const newTodos = deepCopy.map((todo) => {
            if (todo.id === id) {
                const originalChecked: boolean = todo.checked;
                todo.checked = !originalChecked;
            }
            return todo;
        });

        setTodos(newTodos);
    };

    // todoの編集
    const handleEdit = (id: number, inputVal: string) => {

        const deepCopy = todos.map((todo) => ({ ...todo }));

        const newTodos = deepCopy.map((todo) => {
            if (todo.id === id) {
                todo.inputValue = inputVal;
            }
            return todo;
        });

        setTodos(newTodos);
    };

    // todoの削除
    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <Fragment>
            {
                todos.map((todo) => (
                    <Stack key={todo.id} direction='row' spacing={5} m={3}>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme={todo.checked ? 'blackAlpha' : 'teal'}
                            aria-label='Done'
                            fontSize='20px'
                            icon={<CheckIcon />}
                            onClick={(e) => handleChecked(todo.id)}
                        />
                        <Input
                            placeholder='input your todo'
                            value={todo.inputValue}
                            onChange={(e) => handleEdit(todo.id, e.target.value)}
                            disabled={todo.checked}
                        />
                        <Button leftIcon={<DeleteIcon />}
                            colorScheme='red'
                            variant='solid'
                            width={120}
                            type='button'
                            onClick={() => handleDelete(todo.id)}>
                            Delete
                        </Button>
                    </Stack>
                ))
            }
        </Fragment>
    );
}