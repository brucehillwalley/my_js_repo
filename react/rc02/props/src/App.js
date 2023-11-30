import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card
        name="pamuk"
        src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_640.png"
        character="uysal"
      />

      <Card
        name="yumak"
        src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
        character="yaramaz"
      />

      <Card
        name="bulut"
        src="https://media.istockphoto.com/id/1361394182/tr/foto%C4%9Fraf/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=ES-dOavVWSDZ_ft64OjGDoiWHWKV7URNOpMZLEIAzYE="
        character="hırçın"
      />
      <Card />
    </div>
  );
}

export default App;
