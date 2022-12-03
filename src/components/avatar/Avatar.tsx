import React from 'react';
import {
  Container,
  AvatarContainer,
  ImageAvatar,
  Mask,
  Reload,
  ReloadImage,
  ReloadContainer,
  StyledLabel,
} from './AvatarStyles';
import defaultAvatar from '../../assets/testAvatar.png';
import reload from '../../assets/reload.png';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {summarySlice} from '../../store/reducers/summarySlice';

export const Avatar = () => {
  const dispatch = useAppDispatch();
  const {avatar} = useAppSelector((state) => state.summarySlice);
  const {setAvatar} = summarySlice.actions;
  const setNewAvatar = (image: File) => {
    dispatch(setAvatar(image));
  };
  return (
    <Container>
      <input
        id="avatarImage"
        hidden={true}
        type="file"
        name="myImage"
        accept="image/png, image/gif, image/jpeg"
        onChange={(event) => {
          if (event.target?.files) {
            setNewAvatar(event.target.files[0]);
          }
        }}
      />
      <ReloadContainer>
        <AvatarContainer>
          <ImageAvatar
            src={avatar ? URL.createObjectURL(avatar) : defaultAvatar}
            alt={'avatar'}
          />
          <Mask />
        </AvatarContainer>
        <Reload>
          <StyledLabel htmlFor={'avatarImage'}>
            <ReloadImage src={reload} />
          </StyledLabel>
        </Reload>
      </ReloadContainer>
    </Container>
  );
};
