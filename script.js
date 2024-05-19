// WORKS LOCALLY:

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('gameFinderForm');
  const gameResults = document.getElementById('gameResults');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const birthYear = document.getElementById('birthYear').value;
    console.log('Form submitted with birth year:', birthYear);

    try {
      const response = await fetch(`http://localhost:3000/games?birthYear=${birthYear}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response received:', data);

      gameResults.innerHTML = '';
      const birthYearHeading = document.createElement('h2');
      birthYearHeading.textContent = `Games released during your birth year, ${birthYear}`;
      gameResults.appendChild(birthYearHeading);

      const gameGrid = document.createElement('div');
      gameGrid.classList.add('game-grid');
      gameResults.appendChild(gameGrid);

      data.games.slice(0, 3).forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameGrid.appendChild(gameItem);

        const gameTitle = document.createElement('h3');
        gameTitle.textContent = game.name;
        gameItem.appendChild(gameTitle);

        const gameImage = document.createElement('img');
        gameImage.src = game.image.medium_url;
        gameImage.alt = game.name;
        gameItem.appendChild(gameImage);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
});



//SERVER URL REPLACE:

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('gameFinderForm');
//   const gameResults = document.getElementById('gameResults');

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const birthYear = document.getElementById('birthYear').value;
//     console.log('Form submitted with birth year:', birthYear);

//     try {
//       // DEBUG: Replace url with the actual url where your server is hosted
//       const response = await fetch(`https://127.0.0.1:5500//games?birthYear=${birthYear}`, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Response received:', data);

//       gameResults.innerHTML = '';
//       const birthYearHeading = document.createElement('h2');
//       birthYearHeading.textContent = `Games released during your birth year, ${birthYear}`;
//       gameResults.appendChild(birthYearHeading);

//       const gameGrid = document.createElement('div');
//       gameGrid.classList.add('game-grid');
//       gameResults.appendChild(gameGrid);

//       data.games.slice(0, 3).forEach(game => {
//         const gameItem = document.createElement('div');
//         gameItem.classList.add('game-item');
//         gameGrid.appendChild(gameItem);

//         const gameTitle = document.createElement('h3');
//         gameTitle.textContent = game.name;
//         gameItem.appendChild(gameTitle);

//         const gameImage = document.createElement('img');
//         gameImage.src = game.image.medium_url;
//         gameImage.alt = game.name;
//         gameItem.appendChild(gameImage);
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   });
// });


// TRY TO ENABLE THIS SCRIPT.JS AND COMMENT OUT THE ABOVE IF NOT RECEIVING A RETURN. (SEE BELOW FOR DETAILS)
    // Added the mode: 'cors' option to the fetch request. This tells the browser to apply CORS rules when making the request.
    // Added the credentials: 'include' option to the fetch request. This allows the browser to include cookies in the request, which may be necessary for some CORS configurations.


    // document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('gameFinderForm');
//   const gameResults = document.getElementById('gameResults');

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const birthYear = document.getElementById('birthYear').value;
//     console.log('Form submitted with birth year:', birthYear);

//     try {
//       const response = await fetch(`http://localhost:3000/games?birthYear=${birthYear}`, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         mode: 'cors',
//         credentials: 'include'
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Response received:', data);

//       gameResults.innerHTML = '';
//       const birthYearHeading = document.createElement('h2');
//       birthYearHeading.textContent = `Games released during your birth year, ${birthYear}`;
//       gameResults.appendChild(birthYearHeading);

//       const gameGrid = document.createElement('div');
//       gameGrid.classList.add('game-grid');
//       gameResults.appendChild(gameGrid);

//       data.games.slice(0, 3).forEach(game => {
//         const gameItem = document.createElement('div');
//         gameItem.classList.add('game-item');
//         gameGrid.appendChild(gameItem);

//         const gameTitle = document.createElement('h3');
//         gameTitle.textContent = game.name;
//         gameItem.appendChild(gameTitle);

//         const gameImage = document.createElement('img');
//         gameImage.src = game.image.medium_url;
//         gameImage.alt = game.name;
//         gameItem.appendChild(gameImage);
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   });
// });
