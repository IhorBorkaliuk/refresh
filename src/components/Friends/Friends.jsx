import { List, Item, Status, Avatar, Name } from './Friends.styled';


export default function FriendList({ friends }) {
    return (
<List>
            {friends.map((friend => {
                const { isOnline, avatar, name, id } = friend;
                return (
                  <Item key={id}>
                <Status status= {isOnline}/>                       
                    <Avatar
                      src={avatar}
                      alt="User avatar"
                      width="48"
                    />
                        <Name>{name}</Name>
                  </Item>
                );
        }))}
</List>
    )
}