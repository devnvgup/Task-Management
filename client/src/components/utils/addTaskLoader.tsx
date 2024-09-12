import axios from "axios";
import { ActionFunction } from "react-router-dom";

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