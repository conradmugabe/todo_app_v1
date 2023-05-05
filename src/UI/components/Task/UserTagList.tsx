import UserTag from "./UserTag";

const users = [
  { id: 1, name: "Ryan Florence", src: "https://bit.ly/ryan-florence" },
  { id: 2, name: "Segun Adebayo", src: "https://bit.ly/sage-adebayo" },
  { id: 3, name: "Kent Dodds", src: "https://bit.ly/kent-c-dodds" },
  { id: 4, name: "Prosper Otemuyiwa", src: "https://bit.ly/prosper-baba" },
  { id: 5, name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
];

export default function UserTagList() {
  return (
    <>
      {users.map((user) => (
        <UserTag key={user.id} user={user} />
      ))}
    </>
  );
}
