import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContactInfo, {AddressInfo, info} from './content';
export default () => (
    <Tabs className="tabs">
        <TabList className="tabs_wrapper">
            <Tab>Контакти</Tab>
            <Tab>Адреса</Tab>
            <Tab>Реквізити</Tab>
            <Tab>Налаштування</Tab>
        </TabList>
        <TabPanel>
            <ContactInfo phone={info.phone}/>
        </TabPanel>
        <TabPanel>
            <AddressInfo/>
        </TabPanel>
        <TabPanel>
            <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 2</h2>
        </TabPanel>
    </Tabs>
)