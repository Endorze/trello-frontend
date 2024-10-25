import styles from "./Home.module.css"

const Home = () => {
  return (
  <>
    <div>
        <h1>Hello</h1>
        <div className={styles.AddList}>
            <h2>+ Lägg till en lista till</h2>
            <div>
                <input placeholder="Skriv titel"></input>
            </div>
        </div>
    </div>
  </>
  )
};

export default Home;
