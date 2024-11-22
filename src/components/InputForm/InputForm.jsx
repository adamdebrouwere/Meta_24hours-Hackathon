import './InputForm.scss';
import infoIcon from '../../assets/icons/info_icon.svg';

function InputForm() {
  return (
    <form className="input-form">
      <div className="input-form__wrapper">
        <textarea
          className="input-form__input"
          type="text"
          placeholder="How do you feel today? How do you want to feel today? What do you want to see? E.g. I feel a little down today but I want to cheer up, show me animals"
        />

        <img src={infoIcon} alt="info" className="input-form__icon" />
      </div>
      <div className="input-form__btn-container">
        <button type="submit">Refresh</button>
      </div>
    </form>
  );
}

export default InputForm;
