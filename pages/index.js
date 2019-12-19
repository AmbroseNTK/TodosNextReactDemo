import SearchAppBar from '../components/appbar';
import { useTodos } from '../hooks/todos.hook';
import Link from 'next/link';
import MemoDialog from '../components/new-memo-dialog';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Typography, LinearProgress } from '@material-ui/core';
import TodoList from '../components/todo-list';

function App(props) {

    const [taskList, addTask, editTask, removeTask] = useTodos();

    const [openNewMemoDialog, setOpenNewMemoDialog] = useState(false);
    const [editMode, setEditMode] = useState(false);

    let editedTaskId = 0;

    console.log(taskList);

    function handleOnAdd() {
        setEditMode(false);
        setOpenNewMemoDialog(() => true);
    }

    function handleOnDialogClose(data) {
        if (data != null) {
            addTask(data);
        }
        setOpenNewMemoDialog(false);
    }

    function handleOnEdited(data) {
        editTask(editedTaskId, (task) => {
            return {
                ...data
            }
        });
        setOpenNewMemoDialog(false);
    }

    function checkTask(pos) {
        console.log("checked");
        editTask(pos, (task) => {
            return {
                ...task,
                done: !task.done
            }
        });
    }

    function countIf(when) {
        return taskList.filter((task) => task.done == when).length;
    }

    return (
        <html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
            </Head>
            <body style={{ margin: 0 }}>
                <SearchAppBar onAdd={handleOnAdd}></SearchAppBar>
                <MemoDialog
                    onClose={handleOnDialogClose}
                    openDialog={openNewMemoDialog}
                    editMode={editMode}
                    onEdited={(task) => handleOnEdited(task)}
                ></MemoDialog>
                <Typography variant="h4" component="h3" style={{ margin: "20px" }}>
                    To do list
                </Typography>
                <LinearProgress style={{ margin: "20px" }} variant="determinate" value={(countIf(true) / taskList.length) * 100} color="primary" />
                <Typography variant="subtitle1" component="h3" style={{ margin: "20px" }}>
                    {countIf(true)}/{taskList.length} done
                </Typography>
                <TodoList taskList={taskList}
                    onCheck={(index) => checkTask(index)}
                    onEdit={(index) => { setEditMode(true); setOpenNewMemoDialog(true) }}
                    onDelete={(index) => removeTask(index)} />
            </body>
        </html>

    )
}


export default App;