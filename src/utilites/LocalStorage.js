import { toast } from "react-toastify";

export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem("jobs")) || [];
    const dataExists = savedData.find((item) => item.bookId == book.bookId);
    if(dataExists){
        toast.warning("Already exists to  Read Book List")
    }else{
        savedData.push(book);
        localStorage.setItem("jobs", JSON.stringify(savedData));
        toast.success('Added to Read Book List')
    }
};


export const getDataFromLocal = () => {
    const getDefaultData = JSON.parse(localStorage.getItem("jobs")) || [];
    return getDefaultData;
}