import React from "react";
import { Text } from "../Text";
import S from "./_AvatarStyle";

interface IPropsAvatar {
  src: string;
  size?: number;
  placeholder?: string;
}

const Avatar = ({ src, size = 40, placeholder }: IPropsAvatar) => {
  if (!src) {
    return (
      <S.Placeholder size={size}>
        <Text>{placeholder?.[0]}</Text>
      </S.Placeholder>
    );
  }

  return (
    <S.Wrapper size={size}>
      <S.Image size={size} src={src} alt="Avatar" />
    </S.Wrapper>
  );
};

export default Avatar;
