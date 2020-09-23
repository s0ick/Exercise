import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Tab from './Tab/Tab';
import TabsLink from './TabsLink/TabsLink';

const Page1 = () => {
 return (
   <div>
     <TabsLink />
     <div>
        <Route path="/page1/tab-1" exact render={() => <Tab id="1"/>} />
        <Route path="/page1/tab-2" exact render={() => <Tab id="2"/>} />
        <Route path="/page1/tab-3" exact render={() => <Tab id="3"/>} />
        <Redirect to="/page1/tab-1" />
     </div>
   </div>
 )
}
export default Page1;