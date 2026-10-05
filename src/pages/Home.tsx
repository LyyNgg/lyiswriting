import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, POSTS, postPath, stickerColorFor, tiltFor } from "../data/posts";
import type { Filter } from "../App";

interface Props {
  filter: Filter;
  onFilter: (f: Filter) => void;
}

export default function Home({ filter, onFilter }: Props) {
  const [featured, ...rest] = POSTS;
  // Keep each post's original index so tilt and sticker colour stay stable when filtering.
  const feed = rest
    .map((post, i) => ({ post, index: i + 1 }))
    .filter(({ post }) => filter === "All" || post.tag === filter);

  return (
    <>
      <header className="hero">
        <div className="hero__sun" aria-hidden="true" />
        <div className="hero__square" aria-hidden="true" />
        <div className="hero__sticker hero__sticker--sense" aria-hidden="true">
          ✦ product sense
        </div>
        <div className="hero__sticker hero__sticker--nerd" aria-hidden="true">
          UX nerd :)
        </div>
        <div className="hero__sticker hero__sticker--huh" aria-hidden="true">
          ?!
        </div>
        <h1 className="hero__title">
          Hey, this <span className="hero__is">is</span> <span className="hero__name">Ly</span>
        </h1>
        <p className="hero__intro">
          This is my little corner of the internet — a bit about who I am, and the things I love doing
          when I'm not working.
        </p>
      </header>

      <section className="section">
        <Link to={postPath(featured)} className="featured">
          <div className="featured__img stripes">
            {featured.img}
            <div className="featured__badge">Latest essay!</div>
          </div>
          <div className="featured__body">
            <div className="eyebrow">
              {featured.tag} · {featured.mins}
            </div>
            <h2 className="featured__title">{featured.title}</h2>
            <p className="featured__dek">{featured.dek}</p>
            <div className="featured__meta">
              <span className="featured__read">Read it →</span>
              <span className="featured__date">{featured.date}</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="section feed">
        <div className="feed__head">
          <h2 className="feed__title">
            All the <em>writing</em>
          </h2>
          <div className="chips" role="group" aria-label="Filter by topic">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={filter === c}
                onClick={() => onFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid">
          {feed.map(({ post, index }) => (
            <Link
              key={post.id}
              to={postPath(post)}
              className="card"
              style={{ "--tilt": `${tiltFor(index)}deg` } as CSSProperties}
            >
              <div className="card__img stripes--sm">
                {post.img}
                <div className="card__sticker" style={{ background: stickerColorFor(index) }}>
                  {post.tag}
                </div>
              </div>
              <h3 className="card__title">{post.title}</h3>
              <p className="card__dek">{post.dek}</p>
              <div className="card__meta">
                {post.date} · {post.mins}
              </div>
            </Link>
          ))}
          {feed.length === 0 && <p className="feed__empty">Nothing here yet — soon!</p>}
        </div>
      </section>
    </>
  );
}
