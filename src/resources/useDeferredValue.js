


//USEDEFERREDVALUE() IS AN OPINION FOR THE USER EXPERIENCE- CONSULT WITH TECH LEAD.



//Call useDeferredValue at the top level of your component to get a deferred version of that value.

//old value replaces the fallback in Suspense if the update suspends the UI

//meant to go last after Suspended UI updates

//Show stale content while fresh content is updating:
import { useState, useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  // ...
}

//Meant to work alongside Suspense, either lazy loading or Relay and Next.js

//In this example, the SearchResults component suspends while fetching the search results. 
//Try typing "a", waiting for the results, and then editing it to "ab". 
//The results for "a" get replaced by the loading fallback.

import { Suspense, useState } from 'react';
import SearchResults from './SearchResults.js';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
      </Suspense>
    </>
  );
}

//useDeferredValue prevents the Loading... fallback from one search result to the next:
//it's a UX opinion, do you want the user to think the new search didn't work
//if it is a larger list of data with a longer lag time
//or do you want them to see the loading fallback???
import { Suspense, useState, useDeferredValue } from 'react';
import SearchResults from './SearchResults.js';

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Location of Apartment:
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder={'Enter an AU state'} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}