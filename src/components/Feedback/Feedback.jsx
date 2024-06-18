// import css from "./Feedback.module.css";

export const Feedback = ({ feedbacks }) => {
  return (
    <ul>
      {feedbacks.map(([key, value]) => (
        <li key={key}>
          <p>
            {key}: {value}
          </p>
        </li>
      ))}
    </ul>
  );
};
