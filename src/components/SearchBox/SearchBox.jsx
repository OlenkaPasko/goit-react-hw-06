import css from "./SearchBox.module.css"

export  default function SearchBox() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text..."
        className={css.input}
      />
    </form>
  );
};
