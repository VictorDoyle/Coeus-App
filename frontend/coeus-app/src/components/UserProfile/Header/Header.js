import React, { useEffect, useState } from 'react';
import { Button, Image, Item, Container } from 'semantic-ui-react'
import { userState } from '../../../recoil/atoms';
import emptyAvatarExample from '../../../testing/placeholders/emptyAvatarExample.png'
import FollowButton from './FollowButton'
import Loader from '../../Loader/Loader'
import UserInfoBio from '../../UserProfile/Header/UserInfoBio'


function ProfileHeader(props) {
    console.log(props)
    return( 
        <>
        { props ? (

<Container> 
        <Item.Group relaxed>
            <Item>
            <Item.Image size='small' src={emptyAvatarExample} circular />

            <Item.Content verticalAlign='middle'>
                <Item.Header> {props.user.username} </Item.Header>
                <Item.Description> {props.user.bio} </Item.Description>
                <Item.Extra>
                <UserInfoBio {...props}/>
                <FollowButton />
                </Item.Extra>
            </Item.Content>
            </Item>

        </Item.Group>
</Container>

) : Loader } 
</>
)
}


export default ProfileHeader






