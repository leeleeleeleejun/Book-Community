import {
  ReadingTimeBox,
  TotalReadingTime,
  Activity,
  Week,
  Day,
} from "./ReadingTimeStyle";

const ReadingTime = () => {
  const column = Array(7).fill(0);
  const today = new Date().getDay();

  return (
    <ReadingTimeBox>
      <TotalReadingTime>
        <span>총 독서시간</span> : 104시간 30분 56초
      </TotalReadingTime>
      <Activity>
        <tbody>
          {column.map((item, index) => {
            const row: number[] =
              index > today ? Array(19).fill(0) : Array(20).fill(0);
            return (
              <tr key={index}>
                {index === 1 ? (
                  <Week>Mon</Week>
                ) : index === 3 ? (
                  <Week>Wed</Week>
                ) : index === 5 ? (
                  <Week>Fri</Week>
                ) : (
                  <Week />
                )}
                {row.map((item, index) => (
                  <Day key={index} $active={index} />
                ))}
              </tr>
            );
          })}
        </tbody>
      </Activity>
    </ReadingTimeBox>
  );
};

export default ReadingTime;
