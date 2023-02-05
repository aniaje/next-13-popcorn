import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
    <div>
      <div className="py-5">
        <h1 className="text-2xl leading-10">{res.title}</h1>
        <h2 className="leading-8">{res.release_date}</h2>
        <h2 className="leading-8">Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-700 inline-block my-2 py-1 px-3 rounded">
          {" "}
          {res.status}{" "}
        </h2>
        <Image
          className="my-12 w-full"
          priority
          src={imagePath + res.backdrop_path}
          width="600"
          height="600"
          alt={res.title}
        ></Image>
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
