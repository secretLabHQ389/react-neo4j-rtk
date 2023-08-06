import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import FindRelatives from '../components/listings/FindRelatives';
import Newborn from '../components/listings/Newborn';
import MostGirls from '../components/listings/MostGirls';
import LandingPage from './LandingPage';
import { selectedFamilyActionSelector } from '../store/databaseSlice';


function Home(database: any) {
  const currentAction = useSelector(selectedFamilyActionSelector)

  return (
    <>
      <Navbar />
      {currentAction && currentAction === 'Welcome! Pick a Category to Begin!' && <LandingPage />}
      {currentAction && currentAction === 'Find Relatives' && <FindRelatives session={database} />}
      {currentAction && currentAction === 'Newborn' && <Newborn />}
      {currentAction && currentAction === 'Most Girls' && <MostGirls />}
    </>
  );
}

export default Home;