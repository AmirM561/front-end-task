import styles from "@/styles/layout.module.scss";

export default function Layout() {
  return (
    <div
      className={`${styles.container} d-flex justify-content-center align-items-center`}
    >
      <div className={styles.card}>
        <div className={`${styles.header} p-4 text-left`}>
          <h2>Join our community</h2>
          <p className={styles.guarantee}>
            30-day, hassle-free money back guarantee
          </p>
          <p className={styles.paragraph}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="d-flex flex-column flex-lg-row">
          <div className={`${styles.leftSection} p-4`}>
            <h3>Monthly Subscription</h3>
            <p className={`${styles.price}`}>
              <span>$29</span> per month
            </p>
            <p>Full access for less than $1 a day</p>
            <button className="btn btn-primary btn-block">Sign Up</button>
          </div>
          <div className={`${styles.rightSection} p-4`}>
            <h3 className="text-left">Why Us</h3>
            <ul className="pl-0">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
