import React, { Suspense, useState, useDeferredValue } from 'react'
import { useSelector } from 'react-redux'
import { familyMembersSelector } from '../../store/databaseSlice'
import SearchResults from '../UI/SearchResults'
import '../navbar/navbar.scss'
import Button from "../button/Button"

const FindRelatives = (props) => {

  const { session } = props

  const currentFamilyMembers = useSelector(familyMembersSelector)

  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const [allMembers, setAllMembers] = useState()

  const getListOfAllFamilyMembers = () => {
		session.database
		  .run('MATCH(a:Member) RETURN a')
		  .then(function(result){
        setAllMembers(result)
		  })
  }

  return (
    <div className="nav__container">
      <Button onClick={() => getListOfAllFamilyMembers()}>GET RELATIVES</Button>
      {console.log('allMembers in component: ', allMembers)}
      <>
        {currentFamilyMembers && <p>{currentFamilyMembers}</p>}
        <label>
          Location of Apartment:
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder={'Find a Family Member by Name'} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={deferredQuery} />
        </Suspense>
      </>
    </div>
  )
}

export default FindRelatives
