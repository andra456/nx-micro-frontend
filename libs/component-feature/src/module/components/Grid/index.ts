import styled from "@emotion/styled";

declare const RowAligns: ["top", "middle", "bottom", "stretch"];
declare const RowJustify: ["start", "end", "center", "space-around", "space-between"];
interface ICol {
  size: number;
  margin?: number | string;
  padding?: number | string;
  offset?: number;
}
interface IRow {
  justify?: typeof RowJustify[number];
  align?: typeof RowAligns[number];
  gap?: number;
}

const glutter = (size: number) => {
  return (size / 24) * 100;
};
export const Row = styled("div")<IRow>(({ justify, align, gap }) => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: justify,
  alignItems: align,
  ...(gap && { rowGap: gap, marginLeft: (gap / 2) * -1, marginRight: (gap / 2) * -1 }),
  ...(gap && { "> div": { paddingLeft: gap / 2, paddingRight: gap / 2 } }),
}));
export const Col = styled("div")<ICol>(({ size, margin, padding, offset }) => ({
  display: "block",
  maxWidth: `${glutter(size)}%`,
  flex: `0 0 ${glutter(size)}%`,
  margin,
  padding,
  ...(offset && { marginLeft: `${glutter(offset)}%` }),
}));
