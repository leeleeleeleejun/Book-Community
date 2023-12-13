import {
  ReadingTimeBox,
  TotalReadingTime,
  Activity,
  Week,
  Day,
} from "./ReadingTime.style";
import { ActivityGraphArray } from "@/types";

const ReadingTime = ({
  activityGraph,
}: {
  activityGraph: ActivityGraphArray;
}) => {
  const column = Array(7).fill(0);
  const today = new Date().getDay();
  const _TotalReadingTime = activityGraph
    .map((item) => item.activities.reduce((prev, curr) => prev + curr), 0)
    .reduce((prev, curr) => prev + curr);

  const second = _TotalReadingTime % 60;
  const minute = Math.floor(_TotalReadingTime / 60) % 60;
  const hour = Math.floor(_TotalReadingTime / 3600);

  return (
    <ReadingTimeBox>
      <TotalReadingTime>
        <span>총 독서시간</span> {hour}시간{minute}분{second}초
      </TotalReadingTime>
      <Activity>
        <tbody>
          {column.map((item, columnIndex) => {
            const row: number[] =
              columnIndex > today ? Array(19).fill(0) : Array(20).fill(0);
            return (
              <tr key={columnIndex + item}>
                {columnIndex === 1 ? (
                  <Week>Mon</Week>
                ) : columnIndex === 3 ? (
                  <Week>Wed</Week>
                ) : columnIndex === 5 ? (
                  <Week>Fri</Week>
                ) : (
                  <Week />
                )}
                {row.map((item, rowIndex) => {
                  return (
                    <Day
                      key={rowIndex + item}
                      $active={translateTime(
                        activityGraph[rowIndex].activities[columnIndex]
                      )}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Activity>
    </ReadingTimeBox>
  );
};

export default ReadingTime;

const translateTime = (second: number) => {
  const minute = second / 60;
  if (second === 0) {
    return 0;
  } else if (minute >= 40) {
    return 1;
  } else if (minute >= 30) {
    return 0.8;
  } else if (minute >= 20) {
    return 0.6;
  } else if (minute >= 10) {
    return 0.4;
  } else {
    return 0.2;
  }
};
