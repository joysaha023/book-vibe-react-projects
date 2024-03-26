export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem("jobs")) || [];
    const dataExists = savedData.find((item) => item.bookId == book.bookId);
    if(dataExists){
        alert("Already exists")
    }else{
        savedData.push(book);
        localStorage.setItem("jobs", JSON.stringify(savedData));
    }
};


export const getDataFromLocal = () => {
    const getDefaultData = JSON.parse(localStorage.getItem("jobs")) || [];
    return getDefaultData;
}