import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Please fill all fields");
      return;
    }

    alert(`Submitted!\nName: ${name}\nEmail: ${email}`);

    // clear form
    setName("");
    setEmail("");
  };

  return (
    <div className="big-container">
      <h2 className="big-title">Simple Form</h2>

      <form onSubmit={handleSubmit} className="big-container">
        <input
          className="big-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="big-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="big-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
