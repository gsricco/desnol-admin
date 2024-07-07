import React from 'react'

import avatar from '@/public/images/user_medium_square.png'
import {ComponentAvatar} from "@/common/components/Avatar/Avatar.styled";
import {AvatarPropsType} from "@/common/components/Avatar/types";


export const Avatar = ({ circle = false, height = 50, userPhoto, width = 50 }: AvatarPropsType) => {
  return (
    <ComponentAvatar
      $circle={circle}
      alt={'avatarUser'}
      height={height}
      src={userPhoto || avatar}
      width={width}
    />
  )
}
