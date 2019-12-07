'use strict';

const e = React.createElement;

class LikeButton extends React.Component {

  render() {

    return e(
      'button',
      { onClick: () => alert("You like this") },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(LikeButton), domContainer);
