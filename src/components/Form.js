import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ post, onSubmit, onClose }) {
  const [form, setForm] = useState({ content: post.content });
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!form.content) return;
    onSubmit(form.content);
  };

  const onChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <>
      <button
        className="Form__close"
        type="button"
        onClick={onClose}
      >
        ✘
      </button>

      <form className="Form" onSubmit={onHandleSubmit}>
        <div className="Form__group">
          <textarea
            className="Form__textbox"
            name="content"
            value={form.content}
            onChange={onChange}
            placeholder="Введите текст"
          />
        </div>

        <button className="Form__button button" type="submit">
          Опубликовать
        </button>
      </form>
    </>
  );
}

Form.defaultProps = {
  post: {
    content: '',
  },
};

Form.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Form;
