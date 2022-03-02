import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import TradingCard from '../components/TradingCard';

let initialState = {
    items: [],
    menuItems: [
        {
            id: 1,
            name: 'Common',
        },
        {
            id: 2,
            name: 'Uncommon',
        },
        {
            id: 3,
            name: 'Rare',
        },
        {
            id: 4,
            name: 'Epic',
        },
        {
            id: 5,
            name: 'Legendary',
        },
        {
            id: 6,
            name: 'Mythic',
        },
        {
            id: 7,
            name: 'Special',
        }
    ],
    selectedItem: null
}

// Import a flat list .md file from Personas.md that has a list of items to be displayed
const TCGViewer = () => {
    const [menuItems, setMenuItems] = useState(initialState.menuItems);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('./Personas.md')
            .then(response => response.text())
            .then(text => {
                let lines = text.split('\n');
                let items = [];
                let item = {};
                lines.forEach(line => {
                        if (item.name) {
                            items.push(item);
                        }
                        item = {};
                        item.name = line.substring(0);
                });
                items.push(item);
                setItems(items);
            });
    }, []);

    const handleItemClick = item => {
        setSelectedItem(item);
    };

    return (
        <div className="tcg-viewer">
            <Layout>
                <Row className='full-width'>
                    <Col flex={1}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            onClick={handleItemClick}
                        >
                            {menuItems.map(item => (
                                <Menu.Item key={item.id}>{item.name}</Menu.Item>
                            ))}
                        </Menu>
                    </Col>
                </Row>
                <Row>
                    <Col flex={1}>
                        <div className="tcg-viewer-content">
                            <Layout>
                            <Row style={{width: '100%'}}>
                            {items.map(item => (
                                <Col span={6}>
                                    <TradingCard
                                        key={item.name}
                                        item={item}
                                        selected={selectedItem === item}
                                    />
                                </Col>
                            ))}
                            </Row>
                            </Layout>
                            
                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
}

export default TCGViewer;