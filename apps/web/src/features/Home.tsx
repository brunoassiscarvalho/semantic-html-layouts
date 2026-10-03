import { VerticalAside } from "@semantic-html-layouts/ui";
import { useNavigate } from "react-router";
export function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <VerticalAside />
      <section>
        <div className="row">
          <div className="column">
            <div className="big-card-list">
              <h3>Grid</h3>
              <div className="card">
                <h4>Card 1</h4>
                <image src="placeholder.webp"></image>
                <p>This is a description of the card.</p>
                <div className="button-container">
                  <button>Action 1</button>
                  <button>Action 2</button>
                </div>
              </div>
              <div className="card">
                <h4>Card 2</h4>
              </div>
              <div className="card">
                <h4>Card 3</h4>
              </div>
              <div className="card">Card 4</div>
              <div className="card">Card 5</div>
              <div className="card">Card 6</div>
            </div>
          </div>
          <div className="column">
            <div className="grid">
              <h3>Grid</h3>
              <div className="card">
                <h4>Card 1</h4>
                <image src="placeholder.webp"></image>
                <p>This is a description of the card.</p>
                <div className="button-container">
                  <button>Action 1</button>
                  <button>Action 2</button>
                </div>
              </div>
              <div className="card">
                <h4>Card 2</h4>
              </div>
              <div className="card">
                <h4>Card 3</h4>
              </div>
              <div className="card">
                <h4>Card 4</h4>
              </div>
              <div className="card">
                <h4>Card 5</h4>
              </div>
              <div className="card">
                <h4>Card 6</h4>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="list">
              <h3>List</h3>
              <div className="card">
                <h4>Card 1</h4>
              </div>
              <div className="card">
                <h4>Card 2</h4>
              </div>
              <div className="card">
                <h4>Card 3</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <h2>Form</h2>
        <form action="/submit-form" method="post">
          <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="user_email" required />
          </fieldset>

          <fieldset>
            <legend>Message</legend>

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="user_message" rows="5"></textarea>
          </fieldset>

          <button type="submit">Send Message</button>
        </form>
      </aside>
    </main>
  );
}
