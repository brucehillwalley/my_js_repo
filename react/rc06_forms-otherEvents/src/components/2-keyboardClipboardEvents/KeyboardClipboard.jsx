import { useState } from "react";

const KeyboardClipboard = () => {
  const [icereik, setIcereik] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode >= 47 && e.keyCode <= 58) {
      alert("Girdiginiz deger rakam olamaz");
      e.preventDefault();
    }
  };

  const handleCopy = (e) => {
    alert("kopyalandi");
  }

  const handleCut = (e) => {
    alert("kesme işlemi yapıldı");
    e.preventDefault()
  }

  const handlePaste = (e) => {
    e.target.style.backgroundColor = "red"
    e.target.style.fontSize = "30px"
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4"  >
      <h2>Keyboard Event</h2>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setIcereik(e.target.value.toLocaleUpperCase())}
        value={icereik}
        onKeyDown={handleKeyDown}
      />
      <div className="w-50 mt-3">
        <p onCopy={handleCopy} className="border border-dark">{icereik}</p>{" "}
        <p onCopy={handleCopy} className="border border-dark">{icereik.toLocaleLowerCase()}</p>{" "}
        <p>deneme</p>
      </div>

      <div>

        <textarea onCut={handleCut} onCopy={handleCopy} onPaste={handlePaste}
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
        ></textarea>

      </div>
    </div>
  );
};

export default KeyboardClipboard;
