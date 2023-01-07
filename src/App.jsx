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
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //<li class='liWrapper'>
      //<img class='image' src=${data.sprites.front_default}></img>
      //<p class='name'>${data.name}</p>
      //<p class='experience'>${data.base_experience}</p>
      //</li>;
      
      console.log(list)
      console.log(data)
      //console.log(data.name);
      //console.log(data.base_experience);
      //console.log(data.sprites.front_default)
    })
  }, []);
  
  console.log(list)

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>

      {list.map((item) => (
        <Pokemon data={item} />
      ))}

      <button>Fetch</button>
    </>
  );
}

const Pokemon = () => {
  return (
    <div>pokemon</div>
  )
};

export default App;
