import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Loc,
  Tag,
  Stats,
  StatsElement,
  Label,
  Quentity,
} from './Profile.styled';

export default function Profile({ username, avatar, stats }) {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@Tag marica</Tag>
        <Loc>Salvador, Brasil</Loc>
      </Description>

      <Stats>
        <StatsElement>
          <Label>Followers</Label>
          <Quentity>{stats.followers}</Quentity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quentity>{stats.views}</Quentity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quentity>{stats.likes}</Quentity>
        </StatsElement>
      </Stats>
    </ProfileWrap>
  );
}
