import axios from "axios";



export const importantTaskLoader = async () => {
    try {
        const response = await axios.get("http://localhost:3000/allTaskImportant");
        const data = response?.data?.tasks
        data.push({ default: true })
        return data;
    } catch (error) {
        console.error("Error loading tasks:", error);
        return [];  // Return an empty array in case of an error
    }
}

