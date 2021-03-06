import "jquery-bar-rating";
import $ from 'jquery'; // <-- if you're NOT using a Le Wagon template (cf jQuery section)

const initStarRating = () => {
  $('.review_rating').barrating({
    theme: 'css-stars',
    // theme: 'fontawesome-stars',
    onSelect:function(value, text, event)
    {
    }

  });

  $('.review_rating_show').barrating('show');

  $('.review_rating_show').barrating({
    // theme: 'css-stars',
    // or
    // theme: 'fontawesome-stars',
    readonly: true
  });

};

export { initStarRating };