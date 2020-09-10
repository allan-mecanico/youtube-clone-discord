/*import React from 'react'; 

export default function () {
    return (
        <div>Oi Mundo!</div>
    )
}
/** Js, Abaixo definição em typescript */

import React from 'react'; 

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';
const Layout: React.FC = () => {
    return <Grid >
        <ServerList/>
        <ServerName/>
        <ChannelInfo />
        <ChannelList />
        <UserInfo />
        <ChannelData />
        <UserList />
    </Grid>;
};
export default Layout;