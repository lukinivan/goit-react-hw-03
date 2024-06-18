import { Description, Feedback, Options, Notification } from "/src/components";
import { useLocalStorage } from "/src/hooks/useLocalStorage";

const counters = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const CafeBuilder = () => {
  const [feedbacks, setFeedback] = useLocalStorage("feedback", counters);

  function handleClick(key) {
    setFeedback({
      ...feedbacks,
      [key]: feedbacks[key] + 1,
    });
  }
  function handleReset() {
    setFeedback(counters);
  }

  const totalFeedback = Object.values(feedbacks).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round(
    (feedbacks["good"] / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        handleClick={handleClick}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
        options={Object.keys(feedbacks)}
      />
      {totalFeedback ? (
        <Feedback
          feedbacks={[
            ...Object.entries(feedbacks),
            ["Total", totalFeedback],
            ["Positive", positiveFeedback + "%"],
          ]}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
