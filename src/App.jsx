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

function App() {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setList(data.results);
      console.log(data.results)
      console.log('setList')
    })
  }, []);

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      <hr />
      {list.map((item) => (
        <Pokemon key={item.name} obj={item} />
      ))}

    </>
  );
}

const Pokemon = ({ obj, newArray }) => {
  const [sortArray, setSortArray] = useState([]);
  //setSortArray(obj)

  console.log(sortArray)
  obj = obj.name;

  //console.log(newArray)
  //console.log(obj);

  const [details, setDetails] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${obj}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTimeout(setDetails(data), 500);
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
