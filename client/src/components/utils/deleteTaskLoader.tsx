import axios from "axios";
import { ActionFunction } from "react-router-dom";

export const deleteTask: ActionFunction = async ({ request }) => {
    try {
        let dataObj: Record<string, FormDataEntryValue> = {};
        let formData = await request.formData();
        for (let [key, value] of formData.entries()) {
            dataObj[key] = value
        }
        const data = await axios.delete(`http://localhost:3000/tasks/${dataObj?.id}`, dataObj)
        return data

    } catch (error) {
        console.log(error);
    }
}