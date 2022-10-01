function App() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        alt="icon"
        src={require("./assets/icon.jpg")}
        style={{ heigit: 100 }}
      />
      <h1 style={{ fontSize: 25, fontWeight: "bold", marginTop: 15 }}>
        사이트 공사중
      </h1>
    </div>
  );
}

export default App;
