import React from 'react'; 

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';


const ChanelList: React.FC = () => {
    return  <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
           </Category>
        
        <ChannelButton channelName="chat-livre" />
        <ChannelButton channelName="bug" />
        <ChannelButton channelName="back-end" />
        <ChannelButton channelName="front-end" />
        <ChannelButton channelName="react" />
    
        </Container>;

};
export default ChanelList;