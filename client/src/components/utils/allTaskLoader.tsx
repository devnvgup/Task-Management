import axios from "axios";
import { ActionFunction } from "react-router-dom";



export const allTaskLoader = async () => {
    try {
        const response = await axios.get("http://localhost:3000/allTask");
        const data = response?.data?.tasks
        data.push({ default: true })
        return data;
    } catch (error) {
        console.error("Error loading tasks:", error);
        return [];  // Return an empty array in case of an error
    }
}

export const addNewTask: ActionFunction = async ({ request }) => {
    try {
        let dataObj: Record<string, FormDataEntryValue> = {};
        let formData = await request.formData();
        for (let [key, value] of formData.entries()) {
            dataObj[key] = value
        }
        const data = await axios.post("http://localhost:3000/addTask", dataObj)
        return data

    } catch (error) {
        console.log(error);

    }
}

export const editTask: ActionFunction = async ({ request }) => {
    try {
        let dataObj: Record<string, FormDataEntryValue> = {};
        let formData = await request.formData();
        for (let [key, value] of formData.entries()) {
            dataObj[key] = value
        }
        debugger
        const data = await axios.put(`http://localhost:3000/tasks/${dataObj?.id}`, dataObj)
        return data

    } catch (error) {
        console.log(error);
    }
}