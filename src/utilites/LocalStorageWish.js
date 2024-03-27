import { toast } from "react-toastify";


export const saveDataToWishLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem("wishbook")) || [];
    const dataExists = savedData.find((item) => item.bookId == book.bookId);
    if(dataExists){
        toast.warning("Already exists wishlist")
    }else{
        savedData.push(book);
        localStorage.setItem("wishbook", JSON.stringify(savedData));
        toast.success('Added to WishList')
    }
};


export const getDataFromWishLocal = () => {
    const getDefaultData = JSON.parse(localStorage.getItem("wishbook")) || [];
    return getDefaultData;
}