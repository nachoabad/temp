'use strict';

function Wish(props) {
  return (
    <div className="slider__item">
			<div className="wishes__person">
				<img className="rounded-circle img-wishes m-auto" src={'https://supercollider.herokuapp.com/' + props.avatar} alt="slider" />
			</div>
			<h4 className="wishes__title font-weight-bold">{props.name}</h4>
			<p className="mx-auto">{props.message}</p>
    </div>
  );
}

function WishList(props) {
  const wishes = props.wishes;
  const wishList = wishes.map((wish) =>
    <Wish key = {wish.id}
          avatar = {wish.avatar}
          name = {wish.name}
          message = {wish.message} />

  );
  return (
    <div className="slick slick-wishes mb-0">
      { wishList }
    </div>
  );
}

class Wishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    fetch('https://supercollider.herokuapp.com/wishes.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <WishList wishes = { this.state.data } />
    );
  }
}

const e = React.createElement;

const domContainer = document.querySelector('#wishes');
ReactDOM.render(e(Wishes), domContainer);