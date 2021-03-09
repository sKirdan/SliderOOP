function SliderLogic(){
    this._imagesUrls = [],
    this.currentImageIndex = 0,
    this._dataService = new SliderDataService();

    
    this.getCurrentImage = function() {
        return this._imagesUrls[this.currentImageIndex];
    };

  /*  this.doYouHavePrewImage = function(){

        return 
    }*/
    this.showNextBtnDisablIndex = function(){
       
        return this._imagesUrls.length - 1;
    }

    this._imagesUrls = this._dataService.getUrls();
    
};