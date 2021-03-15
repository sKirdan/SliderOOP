function SliderLogic(view){
    this._imagesUrls = []
    this.currentImageIndex = 0
    this._imagesUrls = new SliderDataService().getUrls()

    this.onClick = function (index) {
        view.slideImage.setAttribute('src', this._imagesUrls[this.currentImageIndex]);
        view.showPrevBtn.disabled = index === 0;
        view.showNextBtn.disabled = index === this._imagesUrls.length - 1;
    };

        return () => {
            view.showPrevBtn.addEventListener('click', () => this.onClick(--this.currentImageIndex));
            view.showNextBtn.addEventListener('click', () => this.onClick(++this.currentImageIndex));

            this.onClick(this.currentImageIndex);
        }
    };
