import styled from "@emotion/styled";
import { color } from "../../index";

interface IAvatarComposition {
  Placeholder?: any;
  Wrapper?: any;
  Image?: any;
}

const S: IAvatarComposition = {};

S.Placeholder = styled("div")<{ size: number }>(({ size }) => ({
  backgroundColor: color["r-100"],
  color: color["n-0"],
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  width: size,
  height: size,
  p: {
    color: color["n-0"],
    fontWeight: 600,
  },
}));

S.Wrapper = styled("div")<{ size: number }>(({ size }) => ({
  display: "grid",
  placeItems: "center",
  width: size,
  height: size,
  borderRadius: "50%",
}));

S.Image = styled("img")<{ size: number }>(({ size }) => ({
  width: size,
  height: size,
  borderRadius: "50%",
  objectFit: "cover",
}));

export default S;
