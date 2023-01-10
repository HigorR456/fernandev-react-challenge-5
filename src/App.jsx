import { useEffect, useState } from 'react';

/*
Consume the API and list all query pokemons from the following endpoint.
https://pokeapi.co/api/v2/pokemon

You must display, for each pokémon:
- Image
- Name
- experience

You can access the information of each pokemón individually at:
https://pokeapi.co/api/v2/pokemon/:id


TIP:
images => sprites.front_default
experience => base_experience

EXTRA: if you can sort by name.
*/
let resultsArray = [];
let ascArray = [];
let descArray = [];

function App() {
  
  const [list, setList] = useState([]);
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setList(data.results);
      resultsArray = data.results;
      console.log(resultsArray)
      console.log('setList')
    })
  }, []);
  
  const handleList = () => {
    setList(resultsArray);
  }

  const handleAscending = () => {
      if (ascArray.length === resultsArray.length) {
        setList(ascArray);
      } else {
        console.log('elseAsc')
        let i = 0;
        while (i<ascending.length) {
          ascArray = [...ascArray, {name: ascending[i]}];
          i++;
        };
        setList(ascArray);
      }
  }

  const handleDescending = () => {
    if (descArray.length === resultsArray.length) {
      setList(descArray);
    } else {
      console.log('elseDesc')
      let j = 0;
      while (j<descending.length) {
        descArray = [...descArray, {name: descending[j]}];
        j++;
      };
      setList(descArray);
    }

  }

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      <button onClick={handleList} >Sort List</button>
      <button onClick={handleAscending} >Sort Alphabetically Ascending</button>
      <button onClick={handleDescending} >Sort Alphabetically Descending</button>
      <hr />
      {list.map((item) => (
        <Pokemon key={item.name} obj={item} />
      ))}

    </>
  );
}

let ascending = []
let descending = []

const Pokemon = ({ obj }) => {
  obj = obj.name;

  const [details, setDetails] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${obj}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTimeout(setDetails(data), 500);
      (ascending = [...ascending, data.name.slice(0)]).sort();
      (descending = [...descending, data.name.slice(0)]).reverse();

      console.log('setDetails')
    })
  }, [])
  
  if (details === null) {
    return <div>-</div>
  }

  return (
    <div className='divWrapper'>
      <span><img className='image' src={details.sprites.front_default}></img></span>
      <p className='name'>{details.name}</p>
      <p className='expTag'>&nbsp;- EXP&nbsp;</p>
      <p className='experience'>{details.base_experience}</p>
    </div>
  )
};

export default App;
