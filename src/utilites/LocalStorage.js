

const getStoredData = () => {
    const storedData = localStorage.getItem('read-book');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveBookData = id => {
    const storedDatabook = getStoredData();
    const exists = storedDatabook.find(bookId => bookId === id);
    if(!exists) {
        storedDatabook.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedDatabook))
    }
}


export {getStoredData, saveBookData}