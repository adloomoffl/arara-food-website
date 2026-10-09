"use client";

import { useLanguage } from "../context/LanguageContext";

export default function SweetFilms() {
  const { locale } = useLanguage();
  const isAr = locale === "ar";
  const films = [
    {
      slug: "peanut-bar",
      title: isAr ? "قرمشة ألواح الفول السوداني" : "The peanut bar crunch",
      description: isAr ? "نظرة أقرب إلى كل قضمة." : "A closer look at every golden bite.",
    },
    {
      slug: "sesame-balls",
      title: isAr ? "كرات مغطاة بالسمسم" : "Little balls, golden sesame",
      description: isAr ? "لحظات حلوة بحجم لقمة." : "Sweet moments in a bite-sized shape.",
    },
  ];

  return (
    <section className="sweet-films" aria-labelledby="sweet-films-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow eyebrow-dark">{isAr ? "لحظات حلوة" : "Sweet moments"}</p>
          <h2 id="sweet-films-title">{isAr ? "قرمشة بكل الأشكال." : "Crunch in every shape."}</h2>
        </div>
        <p>{isAr ? "اكتشف ألواحنا وكراتنا الحلوة في لقطة أقرب." : "Press play for a closer look at our bars and sweet balls."}</p>
      </div>
      <div className="sweet-films-grid">
        {films.map((film, index) => (
          <figure className="sweet-film" key={film.slug}>
            <video
              controls
              playsInline
              preload="none"
              poster={`/videos/${film.slug}-poster.jpg`}
              aria-label={film.title}
            >
              <source src={`/videos/${film.slug}.mp4`} type="video/mp4" />
              <a href={`/videos/${film.slug}.mp4`}>{isAr ? "شاهد الفيديو" : "Watch the video"}</a>
            </video>
            <figcaption>
              <span className="sweet-film-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{film.title}</h3>
                <p>{film.description}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
