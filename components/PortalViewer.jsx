import React, { useState, useEffect } from 'react';
import PortalCarousel from './PortalCarousel';
import G6 from '@antv/g6';
import {
  portals,
} from './data/mockPortals.js';
const toolbar = new G6.ToolBar();



const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(e) {
    const outDiv = document.createElement('div');
    outDiv.style.width = '180px';
    outDiv.innerHTML = `
      ${e.item.getModel().label || e.item.getModel().id}
      <ul>
        <li>Budget: ${e.item.getModel().data.budget}</li>
        <li>Token Supply: ${e.item.getModel().data.token_supply}</li>
        <li>Token Price: ${e.item.getModel().data.token_price}</li>
        <li>Available budget: ${(e.item.getModel().data.phases * e.item.getModel().data.tasks_per_phase) * e.item.getModel().data.token_price}</li>
      </ul>`
    return outDiv
  },
  itemTypes: ['node']
});


// Use localstorage to store the current portal

const PortalViewer = () => {
  const [currentPortal, setCurrentPortal] = useState(0);
  const [selectedPortal, setSelectedPortal] = useState(null);

  const getCurrentPortal = () => {
    const currentPortal = localStorage.getItem('currentPortal');
    if (currentPortal) {
      return JSON.parse(currentPortal);
    }
    return null;
  }

  useEffect(() => {
    const currentPortal = getCurrentPortal();
    if (currentPortal) {
      setSelectedPortal(currentPortal);
    } else {
      // Create the currentPortal in localStorage
      setSelectedPortal(portals[0]);
      localStorage.setItem('currentPortal', JSON.stringify(portals[0]));
    }
  }, [])

  return (
    <>
      {/* <Viewer item={selectedPortal} /> */}

      <PauseMenu />
      <PortalCarousel setSelectedPortal={setSelectedPortal} fadeOut={true} className={(selectedPortal) ? 'active' : 'hidden'} />
    </>
  )
}



const data = {
  nodes: [
    {
      id: 'node1',
      label: 'NeoDAO',
      labelCfg: {
        position: 'bottom',
        color: '#fff',
      },
      data: {
        budget: 22000,
        token_supply: 1000000,
        token_price: 22000 / 1000000,
      },
      image: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
      size: [120],
    },
    {
      id: 'node2',
      label: 'Lead Loan App',
      data: {
        budget: 3000,
        token_supply: 10000,
        token_price: 3000 / 10000,
        phases: 4,
        tasks_per_phase: 25
      }
    },
    {
      id: 'node3',
      label: 'nIM',
      data: {
        budget: 500,
        token_supply: 1000000,
        token_price: 500 / 1000000,
      }

    },
    {
      id: 'node4',
      label: 'Trading Cards',
      data: {
        budget: 1500,
        token_supply: 1000000,
        token_price: 1500 / 1000000,
      }
    },
    {
      id: 'lla-infrastucture',
      label: 'Infrastructure',
      data: {
        budget: 400,
        token_supply: 1000000,
        token_price: 400 / 1000000,
      }
    },
    { 
      id: 'lla-functionality',
      label: 'Functionality',
      data: {
        budget: 2200,
        token_supply: 1000000,
        token_price: 100000 / 1000000,
      }
    }
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
    {
      source: 'node1',
      target: 'node3',
    },
    {
      source: 'node1',
      target: 'node4',
    },
    {
      source: 'node2',
      target: 'lla-infrastucture',
      label: '$3,000',
      labelCfg: {
        position: 'top',
        style: {
          fill: '#fff',
          fontSize: '12',
          fontWeight: 'bold',
        }
      }
    },
    {
      source: 'node2',
      target: 'lla-functionality',
      label: '$3,000',
      labelCfg: {
        position: 'top',
        style: {
          fill: '#fff',
          fontSize: '12',
          fontWeight: 'bold',
        }
      }
    }
  ],
}


const Viewer = ({ item }) => {

  useEffect(() => {
    if (item) {
      const graph = new G6.Graph({
        container: 'mountNode',
        width: window.innerWidth,
        height: window.innerHeight,
        plugins: [tooltip,toolbar],
        animate: true,
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas','toolbar','click-select','activate-relationship'],
        },
        layout: {
          type: 'gForce',
          center: [window.innerWidth / 2, window.innerHeight / 2],
          linkDistance: 300,
          nodeStrength: 1000,
          edgeStrength: 200,
          nodeSize: 30,
          onTick: () => {
            console.log('ticking');
          },
          onLayoutEnd: () => {
            console.log('force layout done');
          },
        },
        defaultNode: {
          type: 'circle',
          size: [120],
          style: {
            fill: 'transparent',
            stroke: '#fff',
            lineWidth: 2,
            color: '#fff',
          },
          // Display the label with white text including the budget, token supply, and token price
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            },
            refX: 0,
            refY: 0,
            position: 'center',
          },

        },
        defaultEdge: {
          size: 4,
          color: '#2a2a2a',
          style: {
            endArrow: {
              path: 'M 0,0 L 8,4 L 8,-4 Z',
              fill: '#2a2a2a',
              lineWidth: 2,
            },
          },
        },
      });

      graph.data(data);
      graph.render();

      graph.on('node:click', (evt) => {
        const node = evt.item;
        console.log(node);
      });

      graph.on('node:mouseenter', (evt) => {
        
      });
    }
  }, [item])

  return (
    <div className="portal-viewer" >
      <div className="portal-viewer-content">
        <div id="mountNode" />

      </div>
    </div >
  )
}

const PauseMenu = () => {
  return (
    <>

    </>
  )
}

export default PortalViewer;