import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Avatar, Tabs, Layout } from 'antd';
import {
    portals,
    quests
  } from './data/mockPortals.js';

  const { TabPane } = Tabs;

const ViewControls = ({ selectedSlide }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // Unique ID for each tabs component
    const [tabsId, setTabsId] = useState(Math.random().toString(36).substring(7));
    useEffect(() => {
        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

    }, [])

    // Functions for global keydown events
    const handleKeyDown = (e) => {
        // If the keydown event is the up arrow key
        if (e.keyCode === 38) {
            document.querySelector('.view-controls').classList.add('active');
            document.querySelector('.view-controls').style.height = '100vh';
        }
        // If down, then remove the className 'active' and change the css height to 0
        if (e.keyCode === 40) {
            document.querySelector('.view-controls').classList.remove('active');
            document.querySelector('.view-controls').style.height = '50px';
        }

        // If D, then increment the active tab
        if (e.keyCode === 68) {
            setActiveTab(activeTab + 1);
        }

        // If A, then decrement the active tab
        if (e.keyCode === 65) {
            setActiveTab(activeTab - 1);
        }
    }

    const tabListData = [
        {
            key: 1,
            tab: 'Leaderboard',
            component: <Leaderboard />
        },
        {
            key: 2,
            tab: 'Chat',
            component: <Chat />
        },
        {
            key: 3,
            tab: 'Quests',
            component: <Quests />
        },
        {
            key: 4,
            tab: 'Rewards',
            component: <Rewards />
        },
        {
            key: 5,
            tab: 'Transactions',
            component: <Transactions />
        },
        {
            key: 6,
            tab: 'Guilds',
            component: <Guilds />
        }
    ]
    return (
        <div className="view-controls" key={tabsId}>
            <Layout style={{ background: 'transparent' }}>
                <Row>
                    <Col span={24}>
                        <div className='view-control-header'>
                            <h1 className='portal-title'>{portals[0].title}</h1>
                            <p>{portals[0].description}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key)}>
                            {tabListData.map((tab) => {
                                return (
                                    <TabPane tab={tab.tab} key={tab.key}>
                                        {tab.component}
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                        
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

const Quests = () => {
    return (
        <div className="quests">
            {/* A table of quests */}
            <Table
                columns={[
                    {
                        id: 1,
                        title: 'Title',
                        dataIndex: 'title',
                        key: 'title',
                        render: text => <a>{text}</a>,
                    },
                    {
                        id: 2,
                        title: 'Description',
                        dataIndex: 'description',
                        key: 'description',
                    },
                    {
                        id: 3,
                        title: 'Reward',
                        dataIndex: 'reward',
                        key: 'reward',
                    },
                ]} dataSource={quests} />


        </div>
    )
}

const Chat = () => {
    return (
        <div className="chat">
            <h1>Chat</h1>
        </div>
    )
}

const Rewards = () => {
    return (
        <div className="rewards">
            <h1>Rewards</h1>
        </div>
    )
}
const Transactions = () => {
    return (
        <div className="transactions">
            <h1>Transactions</h1>
        </div>
    )
}

const Guilds = () => {
    return (
        <div className="guilds">
            <h1>Guilds</h1>
        </div>
    )
}

const Leaderboard = () => {
    const columns = [
        {
            title: 'Rank',
            dataIndex: 'score',
            key: 'score',
            render: (text, record) => {
                return (
                    // <div className="leaderboard-level">
                    //     <div className="leaderboard-level-number">{text}</div>
                    //     {/* A guild emblem stored in the guild property with an image link, preferrably gif*/}
                    //     <div className="leaderboard-level-guild">
                    //         <img style={{ width: 32, height: 32 }} src={record.guild.emblem} alt="guild emblem" />
                    //     </div>
                    // </div>
                    // Avatar with the guild emblem
                    <><Avatar src={record.guild.emblem} /><span style={{color: '#Fff', marginLeft: 8}}>{text}</span></>
                )
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Neo',
            score: 32,
            guild: {
                emblem: 'https://i.pinimg.com/originals/b0/b7/64/b0b76439e5cd5ef9bab27e83c4fdb2f2.gif',
                name: 'NeoDAO'
            }
        },
        {
            key: '2',
            name: 'Rosca',
            score: 42,
            guild: {
                emblem: 'https://i.imgur.com/ZQQZQZQ.gif',
                name: 'NeoDAO'
            }
        },
        {
            key: '3',
            name: 'Niko',
            score: 32,
            guild: {
                emblem: 'https://i.imgur.com/ZQQZQZQ.gif',
                name: 'NeoDAO'
            }
        },
    ]
    return (
        <div className="leaderboard">
            <Row>
                <Col span={24}>
                    <Table
                        bordered={false}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />

                </Col>
            </Row>
        </div>
    )
}

export default ViewControls;