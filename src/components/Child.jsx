import { useRef } from "react";
import "./child.module.css";

const Child = ({ title }) => {
  const dummyPromise = (name) => {
    // name is scopped here
    return new Promise((resolve, reject) => {
      resolve("sucess");
    });
  };
  const inputRef = useRef(null);
  const submitDataToApi = async ({ name }) => {
    await dummyPromise(name)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // inputRef.current.focus();
    alert(inputRef.current.value);
    submitDataToApi({ name: inputRef.current.value });
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="box">
          <input type="text" ref={inputRef} placeholder="Enter name here" />
          <button
            type="submit"
            style={{ borderRadius: 4, padding: 5, backgroundColor: "green" }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Child;
