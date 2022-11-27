import data from 'components/profale/Description/user';
import data2 from 'components/statistics/data';
import data3 from 'components/Friends/friends.json';
import data4 from 'components/TransactionHistory/transactions.json'
import { Stats, Profile, Description } from 'components/profale';
import { Statistics, TitleStatistics, StatList } from 'components/statistics';
import { FriendList }  from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
// import { StyledApp } from './App.styled';


export const App = () => {
    return (<>
        <Profile>
            <Description item={data} />
            <Stats item={data} />
        </Profile>

        <Statistics>
            <TitleStatistics />
            <StatList item={data2}/>
        </Statistics>

        <FriendList item={data3} />
        
        <TransactionHistory item={data4}/>
    </>);
};