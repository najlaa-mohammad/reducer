import useForm from "../hooks/useForm";

const UserForm = () => {
  const [handelSubmit, user, setUser] = useForm();

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          placeholder="enter your first name"
          value={user.FirstName}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, FirstName: e.target.value };
            })
          }
        />
        <br />
        <input
          placeholder="enter your last name"
          value={user.LastName}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, LastName: e.target.value };
            })
          }
        />
        <br />
        <input
          placeholder="enter your age"
          type="number"
          value={user.age}
          onChange={(e) =>
            setUser((prev) => {
              return { ...prev, age: e.target.value };
            })
          }
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserForm;
