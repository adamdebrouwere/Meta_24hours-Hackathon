import './InputForm.scss';
import { useState } from 'react';

function InputForm({ setTooltipVisible }) {
  const [textarea, setTextarea] = useState('');

  const handleInputChange = (e) => {
    setTextarea(e.target.value);
  };
  const handleMouseOver = () => {
    setTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setTooltipVisible(false);
  };

  return (
    <form className="input-form">
      <div className="input-form__wrapper">
        <div className="input-form__profile"></div>
        {!textarea && (
          <div className="input-form__placeholder">
            How do you feel today? 🧐 <br />
            How do you want to feel today? 🌞
            <br />
            What do you want to see? 🐾
            <br />
            <br />
            E.g. I feel a little down today but I want to cheer up, show me
            animals
          </div>
        )}
        <textarea
          className="input-form__input"
          type="text"
          onChange={handleInputChange}
          placeholder=""
        />
        <div
          className="input-form__info-container"
          onMouseOver={() => handleMouseOver(true)}
          onMouseOut={() => handleMouseOut(false)}
        >
          <img
            src="./icons/info_icon.svg"
            alt="info"
            className="input-form__icon"
          />
          <div className="input-form__tooltip">
            <p>
              We’re making your feed smarter and more personal. <br />
              By sharing how you feel or what you’re looking for, we’ll tailor
              your experience to match your mood, interests, and needs.
              <br /> Whether you’re seeking inspiration, connection, or
              something new, your feed will adapt to bring you closer to what
              matters most.
            </p>
            <p className="input-form__info">
              Just tell us how you’re feeling today, and let us do the rest!
              <br />
              (p.s. toss in your fav emojis) How do you feel today? How do you
              want to feel today? What do you want to see?
            </p>
          </div>
        </div>
      </div>
      <div className="input-form__btn-container">
        <button className="input-form__btn" type="submit">
          Refresh
        </button>
      </div>
    </form>
  );
}

export default InputForm;
