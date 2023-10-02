import styled from "@emotion/styled";

interface IPopoverComposition {
  Wrapper?: any;
  Button?: any;
  Panel?: any;
  Container?: any;
  Triangle?: any;
}

const S: IPopoverComposition = {};

S.Wrapper = styled("div")({
  position: "relative",
  display: "inherit",
});

S.Button = styled("div")({
  display: "inline-flex",
  gap: 8,
  alignItems: "center",
  cursor: "pointer",
});

S.Panel = styled("div")<{ position: ["bottom" | "top", "left" | "right"] }>(({ position }) => ({
  position: "absolute",
  userSelect: "none",
  top: position[0] === "bottom" ? 32 : "auto",
  bottom: position[0] === "top" ? 32 : "auto",
  left: position[1] === "right" ? 0 : "auto",
  right: position[1] === "left" ? 0 : "auto",
}));

export default S;
