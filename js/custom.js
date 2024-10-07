$(document).ready(function () {
  $(".products_listSlide").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".testimonial_list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".TrendingProduct_list").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

TrendingProduct_list;
