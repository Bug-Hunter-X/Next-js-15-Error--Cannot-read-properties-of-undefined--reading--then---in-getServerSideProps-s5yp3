```javascript
// pages/index.js
import { GetServerSideProps } from 'next';

const getServerSideProps: GetServerSideProps = async (context) => {
  // Simulate an asynchronous operation
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();

  // Return the data correctly
  return {
    props: {
      characters: data.results
    }
  }
};

export default function Home({ characters }: any) {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <ul>
        {characters.map((character: any) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>      
    </div>
  );
}

export { getServerSideProps };
```