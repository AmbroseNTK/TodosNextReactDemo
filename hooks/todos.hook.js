import React, { useState, useEffect } from 'react';
import useLocalStorage from './storage.hook';

const DB_NAME = "todos-next-demo-db";

export function useTodos(initTaskList = []) {

    const [taskList, setTaskList] = useState([]);

    const [data, saveChanged] = useLocalStorage(DB_NAME);

    const [isLoaded, setIsLoaded] = useState(false);

    function jsonToArray(json) {
        let result = [];
        let keys = Object.keys(json);
        for (let i = 0; i < keys.length; i++) {
            result.push(json[keys[i]]);
        }
        return result;
    }

    function arrayToJson(array) {
        let json = {};
        for (let i = 0; i < array.length; i++) {
            json[i] = array[i];
        }
        return json;
    }

    useEffect(() => {
        if (isLoaded) {
            saveChanged({ data: arrayToJson(taskList) });
        }
    }, [taskList])

    useEffect(() => {
        if (data.data != undefined && !isLoaded) {
            setTaskList(jsonToArray(data.data));
            setIsLoaded(true);
        }
    }, [data])

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