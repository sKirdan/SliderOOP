function Slider(){
    return (elId) => {
        var sliderView = {
            showPrevBtn: null,
            showNextBtn: null,
            slideImage: null,
            controller: null
        }

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        var htmlDivElement = document.createElement("div");
        htmlDivElement.innerHTML =`
        <div class='itk-slider'>
            <button class='show-prev-btn'> PREV </button>
            <img class='slide-img' src="" />
            <button class='show-next-btn'> NEXT </button>
        </div>`

        el.appendChild(htmlDivElement);

        sliderView.showPrevBtn = htmlDivElement.querySelector('.show-prev-btn'),
        sliderView.showNextBtn = htmlDivElement.querySelector('.show-next-btn'),
        sliderView.slideImage = htmlDivElement.querySelector('.slide-img')

        sliderView.controller = new SliderLogic(sliderView)();
    };
};


