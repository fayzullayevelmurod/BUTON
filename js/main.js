var swiper = new Swiper(".aboutSlider", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Builder slider
var swiper = new Swiper(".builderSlider", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".builderSlider2", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


// Count
document.addEventListener("DOMContentLoaded", function () {
    var addCountButtons = document.querySelectorAll(".addCount");
    var removeCountButtons = document.querySelectorAll(".removeCount");

    addCountButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var resultCount = this.nextElementSibling;
            var count = parseInt(resultCount.textContent);
            count++;
            resultCount.textContent = count;
        });
    });

    removeCountButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var resultCount = this.previousElementSibling;
            var count = parseInt(resultCount.textContent);
            if (count > 0) {
                count--;
                resultCount.textContent = count;
            }
        });
    });
});