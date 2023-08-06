import React from 'react';
import Home from './pages/Home'
import Legal from './pages/Legal'
import FamilyAdmin from './components/listings/FamilyAdmin'
import { Routes, Route } from 'react-router-dom'

var neo4j = require('neo4j-driver');

const URI = 'neo4j+s://61c76ce3.databases.neo4j.io'
const USER = 'neo4j'
const PASSWORD = 'jtvkGRx3f2MqLczEpGXrPSC4n7IFUGOgM30_P_7JQEM'

let driver

try {
  driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
  const serverInfo = driver.getServerInfo()
  console.log('Connection established')
} catch(err: any) {
  console.log(`Connection error\n${err}\nCause: ${err.cause}`)
}

var session = driver.session()

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home database={session} />} />
        <Route path='/legal' element={ <Legal />} />
        <Route path='/archives' element={ <FamilyAdmin />} />
      </Routes>
    </>
  );
}

export default App;
