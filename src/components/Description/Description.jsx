import s from "./Description.module.css";

export const Description = () => {
  return (
    <div className={s.cont}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
