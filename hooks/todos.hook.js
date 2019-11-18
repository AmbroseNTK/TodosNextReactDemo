import React, { useState, useEffect } from 'react';

const DB_NAME = "todos-next-demo-db";

export function useTodos(initTaskList = []) {

    const [taskList, setTaskList] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        if (!isLoaded) {
            let json = JSON.parse(localStorage.getItem(DB_NAME));
            console.log(json);
            if (json != undefined) {
                let keys = Object.keys(json["data"]);
                let data = [];
                for (let i = 0; i < keys.length; i++) {
                    data.push(json["data"][keys[i]]);
                }
                setTaskList(data);
            }
            setIsLoaded(true);
        }
        let savedData = { data: {} };
        for (let i = 0; i < taskList.length; i++) {
            savedData.data[i] = taskList[i];
        }
        console.log(savedData);
        localStorage.setItem(DB_NAME, JSON.stringify(savedData));
    }, [taskList])

    function change(tasks) {
        setTaskList(tasks);

    }

    function addTask(task) {
        change([...taskList, task]);
    }

    function removeTask(pos) {
        let removed = [];
        for (let i = 0; i < taskList.length; i++) {
            if (i != pos) {
                removed.push(taskList[i]);
            }
        }
        change([...removed]);
    }

    function editTask(pos, handle) {
        let updated = taskList;
        updated[pos] = handle(updated[pos]);
        change([...updated]);
    }

    return [
        taskList,
        addTask,
        editTask,
        removeTask
    ];
}