import { toast } from "react-toastify";


export const saveDataToWishLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem("wishbook")) || [];
    const dataExists = savedData.find((item) => item.bookId == book.bookId);
    if(dataExists){
        toast.warning("Already Read this Book ")
    }else{
        savedData.push(book);
        localStorage.setItem("wishbook", JSON.stringify(savedData));
        toast.success('Added to Wish List')
    }
};


export const getDataFromWishLocal = () => {
    const getDefaultData = JSON.parse(localStorage.getItem("wishbook")) || [];
    return getDefaultData;
}