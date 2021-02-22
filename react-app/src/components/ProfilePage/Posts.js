import React, { useState } from 'react'
import PicGrid from './PicGrid.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './styles/posts.css'

function Posts() {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <>

            <div className="tabs" >
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <TabList>
                        <Tab className="postsTab">Posts</Tab>
                        {/* <Tab className="TaggedTab">Tagged</Tab> */}
                    </TabList>
                    <TabPanel className="post"><PicGrid /></TabPanel>
                    {/* <TabPanel className="tagged"><InProgress /></TabPanel> */}
                </Tabs>
            </div >
        </>
    )
}
export default Posts