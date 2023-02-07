import Movie from "./movie";

interface IMovie {
  title: string;
  original_title: string;
  release_date: string;
  poster_path: string;
  id: string;
}

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black p-12 leading-12 text-center">
        Everybody loves popcorn
      </h1>
      <div className="grid gap-16  grid-cols-fluid">
        {res.results.map((movie: IMovie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.original_title}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
