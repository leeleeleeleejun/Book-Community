import styled from "styled-components";

export const ReadingTimeBox = styled.div`
  margin: 52px 0;
`;

export const TotalReadingTime = styled.div`
  margin-bottom: 10px;
  text-align: right;
  font-size: var(--font-small);

  span {
    font-weight: var(--weight-semi-bold);
  }
`;

export const Activity = styled.table`
  background-color: white;
  padding: 10px;
  border-radius: 8px;

  tr {
    display: flex;
    gap: 3px;
    margin: 3px;
  }
`;

export const Week = styled.td`
  font-size: var(--font-small);
  width: 30px;
`;

export const Day = styled.td<{ $active: number }>`
  width: 13px;
  height: 13px;
  background-color: var(--color-main);
  border-radius: 3px;
  ${({ $active }) =>
    $active > 0
      ? `opacity: ${$active};`
      : "background-color: var(--color-gray-3);"}
`;
