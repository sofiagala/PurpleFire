class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.carouselContainer = document.querySelector(".card-container");
    this.prevButton = document.querySelector(".carousel-prev");
    this.nextButton = document.querySelector(".carousel-next");

    this.autoplayCallbackBind = this.autoplayCallback.bind(this);

    // Initiate carousel
    this.init();

    // Attach buttons events
    this.prevButton.addEventListener('click', this.prevButtonClick.bind(this), false);
    this.nextButton.addEventListener('click', this.nextButtonClick.bind(this), false);
  }

  init() {
    // Slide variables
    this.gutter = 20;
    this.slideWidth = 250;
    this.slidesNumber = this.carouselContainer.querySelectorAll('.card').length;
    this.currentSlide = 0;
    this.prevSlide = 0;
    this.direction = 'right';

    // Transition variables
    this.delta = this.slideWidth + this.gutter;
    this.transitionDuration = 2000;
    this.scrollLength = this.carouselContainer.scrollWidth - this.carouselElement.getBoundingClientRect().width;
    this.scrolledDistance = 0;
    this.slideSpeed = this.delta / this.transitionDuration;

    this.carouselContainer.style.transform = 'translateX(0px)';
    this.carouselContainer.style.transition = `transform ${this.transitionDuration}ms linear`;

    // Init autoplay
    this.autoplay(true);
  }

  nextButtonClick(event) {
    this.autoplay(false);
    this.gotoNextSlide(true);
  }

  prevButtonClick(event) {
    this.autoplay(false);
    this.gotoPrevSlide(true);
  }

  gotoNextSlide(fastSlide = false) {
    // If already on last slide don't move.
    if (this.currentSlide >= this.slidesNumber - 1 || this.scrolledDistance >= this.scrollLength) {
      return;
    }

    // Calculate scroll movement
    if (this.scrolledDistance + this.delta > this.scrollLength) {
      // on end of slider speed up and change slide direction
      const remainingScroll = this.scrollLength - this.scrolledDistance;
      this.scrolledDistance = this.scrollLength;
      this.carouselContainer.style['transition-duration'] = remainingScroll / this.slideSpeed + 'ms';
      this.direction = 'left';
    } else {
      if (fastSlide) {
        this.carouselContainer.style['transition-duration'] = this.transitionDuration / 2 + 'ms';
      } else {
        this.carouselContainer.style['transition-duration'] = this.transitionDuration + 'ms';
      }
      this.scrolledDistance += this.delta;
    }

    this.carouselContainer.style.transform = `translateX(-${this.scrolledDistance}px)`;
    this.currentSlide++;

    return;
  }

  gotoPrevSlide(fastSlide = false) {
    // If already on first slide don't move.
    if (this.currentSlide < 1 || this.scrolledDistance <= 0) {
      return;
    }

    // Calculate scroll movement
    if (this.scrolledDistance - this.delta < 0) {
      // on beggining of slider speed up and change slide direction
      const remainingScroll = this.scrolledDistance;
      this.scrolledDistance = 0;
      this.carouselContainer.style['transition-duration'] = remainingScroll / this.slideSpeed + 'ms';
      this.direction = 'right';
    }
    else {
      if (fastSlide) {
        this.carouselContainer.style['transition-duration'] = this.transitionDuration / 2 + 'ms';
      } else {
        this.carouselContainer.style['transition-duration'] = this.transitionDuration + 'ms';
      }
      this.scrolledDistance -= this.delta;
    }

    this.carouselContainer.style.transform = `translateX(-${this.scrolledDistance}px)`;
    this.currentSlide--;

    return;
  }

  autoplayCallback() {
    if (this.direction === 'right') {
      this.gotoNextSlide();
    }
    else {
      this.gotoPrevSlide()
    }
  }

  autoplay(play) {
    if (play) {
      this.carouselContainer.addEventListener('transitionend', this.autoplayCallbackBind);
      this.gotoNextSlide();
    } else {
      this.carouselContainer.removeEventListener('transitionend', this.autoplayCallbackBind);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.carousel').forEach(carouselElement => {
    new Carousel(carouselElement);
  })
});