import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p className={css.search}>Find contacts by name</p>
      <input
        className={css.searchBox}
        type="text"
        value={value}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
    </div>
  );
}
