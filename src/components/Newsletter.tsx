import { useState, type FormEvent } from "react";

interface Props {
  subscribed: boolean;
  onSubscribe: (email: string) => void;
}

export default function Newsletter({ subscribed, onSubscribe }: Props) {
  const [email, setEmail] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a real newsletter provider.
    onSubscribe(email);
  };

  return (
    <section className="section newsletter-wrap">
      <div id="newsletter" className="newsletter">
        <div className="newsletter__blob" aria-hidden="true" />
        <div className="newsletter__copy">
          <h2 className="newsletter__title">
            One essay, every other Sunday.
          </h2>
          <div className="newsletter__sub">No growth hacks. Just product thinking, in your inbox.</div>
        </div>
        {subscribed ? (
          <div className="newsletter__done" role="status">
            You're in ✦ see you Sunday
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={submit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              className="newsletter__input"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter__submit">
              Count me in
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
