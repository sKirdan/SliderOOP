function SliderDataService(){
    this.imageUrls = [];
    this.getUrls = function(successCallback){
        var _imagesUrls = [];
        
        this._imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhMPEJ1K_CWksesnRl9H2VFXkAK1qGzcjVQ&usqp=CAU');
        this._imagesUrls.push('https://i.pinimg.com/originals/2f/2b/14/2f2b142ee8300bd86bc109383c2bb632.jpg');
        this._imagesUrls.push('https://i.pinimg.com/originals/81/54/9c/81549ccf0e30e8ba304b6c73647c0cb0.jpg');
        this._imagesUrls.push('https://i.pinimg.com/originals/97/16/39/971639e179c5f6a2eef56ba9a63b2025.jpg');

        successCallback();
    }
    
}