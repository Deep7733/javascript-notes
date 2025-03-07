class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }
}

    let book = new Book('introduction to javascript', 'deepti rawat', 2010);
    let book2 = new Book('javascript for beginners', 'sachin', 2015);
    let book3 = new Book('javascript for advanced', 'deepti', 2018);
    // getter for author property
    get author () {
        return this._author;
    }
    // setter for author
    set author(newName){
        this._author=newName;
    }
    get title () {
        return this._title;
    }
    set title(newName){
        this._title=newName;
    }
    get pubDate(){
        return this._pubDate;
    }
    set pubDate(newPubDate){
        this._pubDate=newPubDate
    }
}