<<<<<<< HEAD
import './App.css';
=======
import "./App.css";
import { useState } from "react";
import { db } from "./firebase"; // ✅ Firebase config
import { collection, addDoc } from "firebase/firestore"; // ✅ Firestore functions
>>>>>>> a31e70a (Added Firestore functionality)

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "volunteers"), {
        name,
        email,
        timestamp: new Date(),
      });
      alert("🎉 Thank you for signing up!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("❌ Error adding volunteer:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="ngo-landing">
      <header className="hero">
        <h1>Helping Hands Foundation</h1>
        <p>Empowering communities, one life at a time ❤️</p>
        <button className="cta-button">Join Us</button>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a non-profit organization dedicated to uplifting
          underprivileged communities through education, healthcare, and
          sustainability initiatives. Together, we can make a difference!
        </p>
      </section>

      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-cards">
          <div className="card">
            <h3>📚 Education Drives</h3>
            <p>
              Free tutoring, school supplies, and scholarships for rural kids.
            </p>
          </div>
          <div className="card">
            <h3>🏥 Health Camps</h3>
            <p>Medical checkups, vaccination drives, and hygiene education.</p>
          </div>
          <div className="card">
            <h3>🌱 Green Earth</h3>
            <p>
              Tree plantation, waste management, and clean water initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="volunteer">
        <h2>Become a Volunteer</h2>
        <p>Join our passionate team and make an impact!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </section>

      <section className="testimonials">
        <h2>What People Say</h2>
        <blockquote>
<<<<<<< HEAD
          "Volunteering here changed my life. I found purpose and made real impact."
          <footer>- Harshika Reddy, Volunteer</footer>
=======
          "Volunteering here changed my life. I found purpose and made real
          impact."
          <footer>- Harshika, Volunteer</footer>
>>>>>>> a31e70a (Added Firestore functionality)
        </blockquote>
        <blockquote>
          "Thanks to the foundation, my daughter now attends school regularly."
          <footer>- Kishan, Beneficiary</footer>
        </blockquote>
      </section>

      <footer>
        <p>© 2025 Helping Hands Foundation | Contact: info@helpinghands.org</p>
      </footer>
    </div>
  );
}

export default App;
