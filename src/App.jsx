export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Generated Test Site</h1>
      <p style={styles.text}>
        This is my first React + Vercel test project.
      </p>
      <button style={styles.button}>Get Started</button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #4f46e5, #06b6d4)",
    color: "white",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem"
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "2rem"
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
