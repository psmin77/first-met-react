import { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState();

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeGender = (event) => setGender(event.target.value);

  const handleSubmit = (event) => {
    if (!name || !gender) {
      alert("모든 데이터를 입력하세요.");
    } else {
      alert(`이름: ${name}, 성별: ${gender}`);
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별 :
        <select value={gender} onChange={handleChangeGender}>
          <option disabled hidden selected>
            성별을 선택하세요.
          </option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
