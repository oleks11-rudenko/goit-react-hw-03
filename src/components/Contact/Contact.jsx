import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDel }) {
  return (
    <div className={css.container}>
      <p className={css.userdata}>{name}</p>
      <p className={css.userdata}>{number}</p>
      <button
        className={css.button}
        onClick={() => {
          onDel(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
