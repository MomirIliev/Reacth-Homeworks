import { Movies } from "./components/Movies";

const movies = [
  {
    name: "The Lord of the Rings",
    date: "03/12/2003",
    // genre: ["action", "adventure", "drama"],
    genre: "action, adventure, drama",
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    imdbLink: "https://www.imdb.com/title/tt0167260/",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/830/434/500/the-lord-of-the-rings-the-return-of-the-king-wallpaper-preview.jpg",
  },
  {
    name: "Forrest Gump",
    date: "23/06/1994",
    // genre: ["drama", "romance"],
    genre: "drama, romance",
    plot: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
    imdbLink: "https://www.imdb.com/title/tt0109830/",
    imgUrl:
      "https://xl.movieposterdb.com/05_06/1994/0109830/xl_21293_0109830_af6ba7a1.jpg?v=2023-09-08%2014:53:44",
  },
  {
    name: "The Matrix",
    date: "24/03/1999",
    // genre: ["action", "Sci-Fi"],
    genre: "action, Sci-Fi",
    plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    imdbLink: "https://www.imdb.com/title/tt0133093/",
    imgUrl:
      "https://wmimages.bruzz.be/styles/3a4d8eb42ce3578819a2af49730fcefc650485a9/import/article_media/thumbnail/F1384%20MATRIX_neo_trinity_the_matrix_keanu_reeves.jpg?style=W3sicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjY0MCwiaGVpZ2h0IjpudWxsLCJncmF2aXR5IjpudWxsLCJ3aXRob3V0RW5sYXJnZW1lbnQiOmZhbHNlfX0seyJqcGVnIjp7InF1YWxpdHkiOjk1fX1d&sign=a74ad463c1dd048417237db9170494bfea9a5284f9b38c7f80229dca929dce62",
  },
  {
    name: "Saving Private Ryan",
    date: "21/07/1998",
    // genre: ["drama", "war"],
    genre: "drama, war",
    plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    imdbLink: "https://www.imdb.com/title/tt0120815/",
    imgUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ89HMuHlCxJwu68S3e0JQLtY3o_uc2woCAF8Vbq3Y3JzWJMto",
  },
  {
    name: "La vita è bella",
    date: "20/12/1997",
    // genre: ["comedy", "drama", "romance"],
    genre: "comedy, drama, romance",
    plot: "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
    imdbLink: "https://www.imdb.com/title/tt0118799/",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7G5HfQRjhdY3IZRa-cIBHg_7zLobTjouRM-pUbNAAjsPR1Sw",
  },
];

export function App() {
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}
