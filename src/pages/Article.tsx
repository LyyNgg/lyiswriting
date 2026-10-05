import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { POSTS, baseLikesFor, postPath } from "../data/posts";

interface Props {
  liked: Record<string, boolean>;
  onToggleLike: (id: string) => void;
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

export default function Article({ liked, onToggleLike }: Props) {
  const { id } = useParams();
  const progress = useReadingProgress();
  const index = POSTS.findIndex((p) => p.id === id);
  if (index === -1) return <Navigate to="/" replace />;

  const post = POSTS[index];
  const isLiked = !!liked[post.id];
  const likeCount = baseLikesFor(index) + (isLiked ? 1 : 0);
  const nextPosts = [1, 2].map((k) => POSTS[(index + k) % POSTS.length]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <header className="art-head">
        <Link to="/" className="back">
          ← all writing
        </Link>
        <div>
          <span className="art-head__tag">
            {post.tag} · {post.mins}
          </span>
        </div>
        <h1 className="art-head__title">{post.title}</h1>
        <p className="art-head__dek">{post.dek}</p>
        <div className="byline">
          <div className="byline__avatar" aria-hidden="true">
            Ly
          </div>
          <div className="byline__text">
            <div className="byline__name">Ly</div>
            <div className="byline__date">{post.date}</div>
          </div>
        </div>
      </header>

      <div className="art-cover">
        <div className="art-cover__img stripes">{post.img}</div>
        <div className="art-cover__sticker" aria-hidden="true">
          fresh
          <br />
          take!
        </div>
      </div>

      <div className="art-layout">
        <aside className="like">
          <button
            type="button"
            className="like__btn"
            aria-pressed={isLiked}
            aria-label={isLiked ? "Remove like" : "Like this essay"}
            onClick={() => onToggleLike(post.id)}
          >
            {isLiked ? "✦" : "+"}
          </button>
          <div className="like__count" aria-live="polite">
            {likeCount}
          </div>
          <div className="like__hint">
            tap if this
            <br />
            clicked
          </div>
        </aside>

        <article className="prose">
          <p className="prose__lead">
            <span className="dropcap" aria-hidden="true">
              {post.lead[0]}
            </span>
            <span className="sr-only">{post.lead[0]}</span>
            {post.lead.slice(1)}
          </p>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <blockquote className="pullquote">“{post.quote}”</blockquote>
          {post.body2.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="tldr">
            <div className="tldr__badge">TL;DR</div>
            <ul>
              {post.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </article>

        <aside className="toc">
          <div className="toc__label">IN THIS ESSAY</div>
          <ol>
            {post.toc.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ol>
        </aside>
      </div>

      <section className="next">
        <h2 className="next__title">
          Read <em>next</em>
        </h2>
        <div className="next__grid">
          {nextPosts.map((p) => (
            <Link key={p.id} to={postPath(p)} className="next-card">
              <div className="next-card__img stripes--sm" aria-hidden="true" />
              <div className="next-card__body">
                <div className="next-card__meta">
                  {p.tag} · {p.mins}
                </div>
                <div className="next-card__title">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
