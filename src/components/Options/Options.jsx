import s from "./Options.module.css";
import clsx from "clsx";

export const Options = ({
  options,
  handleClick,
  handleReset,
  totalFeedback,
}) => {
  return (
    <ul className={s.cont}>
      {options.map((key) => (
        <li key={key}>
          <button
            className={clsx(s.btn, { [s[key]]: key })}
            type="button"
            onClick={() => handleClick(key)}
          >
            {key}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button
            className={clsx(s.btn, s.reset)}
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
