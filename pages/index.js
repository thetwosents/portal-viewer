import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PortalViewer from '../components/PortalViewer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import MainView from './nathans-project/index'
// import TCGViewer from './quest-builder'


// A simple test reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return { ...state, items: action.payload };
        case 'SET_PORTAL':
            return { ...state, portal: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer)

const Home = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>Portal Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <PortalViewer />
      </div>
    </Provider>
  )
}




export default Home