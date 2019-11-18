import { useState, useEffect } from 'react';
import { List, ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
export default function TodoList(props) {
    const { taskList, onCheck, onEdit, onDelete } = props;
    const [tasks, setTasks] = useState(taskList);
    useEffect(() => {
        setTasks(taskList);
    }, [taskList]);

    return (
        <List>
            {tasks.map((task, index) => (
                <ListItem key={index} onClick={() => onCheck(index)} button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={task.done}
                            tabIndex={-1}
                        />
                    </ListItemIcon>
                    {
                        task.done ? (<ListItemText><strike>{task.content}</strike> </ListItemText>) : (<ListItemText primary={task.content} />)
                    }
                    <ListItemSecondaryAction>
                        <IconButton aria-label="edit" onClick={() => onEdit(index)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit" onClick={() => onDelete(index)} color="secondary">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    )

}