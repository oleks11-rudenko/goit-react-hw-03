import css from './Contact.module.css';

export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.container}>
      <p className={css.userdata}>{name}</p>
      <p className={css.userdata}>{number}</p>
      <button className={css.button}>Delete</button>
    </div>
  );
}
