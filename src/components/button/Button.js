import s from './Button.module.css';

const Button = ({ loadMoreBtn }) => {
  return (
    <button type="button" className={s.button} onClick={loadMoreBtn}>
      Load more
    </button>
  );
};

export default Button;

// export default class Button extends Component {
//   render() {
//     return (
// <button
//   type="button"
//   className={s.button}
//   onClick={this.props.loadMoreBtn}
// >
//   Load more
// </button>
//     );
//   }
// }
