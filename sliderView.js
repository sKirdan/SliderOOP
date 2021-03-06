function Slider(){
    this.showPrevBtn = null,
    this.showNextBtn = null,
    this.slideImage = null,
    this._local = new SliderLogic();

    this.start = function (elId) {

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);
 
        el.innerHTML =`
        <div class='itk-slider'>
            <button class='show-prev-btn'> PREV </button>
            <img class='slide-img' src="" />
            <button class='show-next-btn'> NEXT </button>
        </div>`

        this.showPrevBtn = el.querySelector('.show-prev-btn'),
        this.showNextBtn = el.querySelector('.show-next-btn'),
        this.slideImage = el.querySelector('.slide-img'),

        this.showPrevBtn.addEventListener('click', () => this.onShowPrevBtnClick());
        this.showNextBtn.addEventListener('click', () => this.onShowNextBtnClick());

        
        this.onClick( this._local.getCurrentImage);
    };
    this.onClick = function (index) {

        this.slideImage.setAttribute('src', this._local.getCurrentImage());
        this.showPrevBtn.disabled = index === 0;
        this.showNextBtn.disabled = index === this._local.showNextBtnDisablIndex();

    };


    this.onShowPrevBtnClick = function () {

        this.onClick(--this._local.currentImageIndex);
    };
    this.onShowNextBtnClick =  function () {

        this.onClick(++this._local.currentImageIndex);
    };

};


