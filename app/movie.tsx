import Link from "next/link";
import Image from "next/image";

interface IMovie {
  title: string;
  release_date: string;
  poster_path: string;
  id: string;
}

export default function Movie({
  title,
  release_date,
  poster_path,
  id,
}: IMovie) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(imagePath + poster_path);
  return (
    <div>
    
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>

        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}
