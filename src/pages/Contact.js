import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)

  const name = queryParams.get("name")
  console.log(queryString,queryParams,name)
  return (
    <div>
      <h2>Contact US {name} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a
        repellendus accusantium omnis distinctio placeat quo quisquam obcaecati
        similique, cupiditate nam, explicabo unde perferendis facilis sint sunt
        sapiente laudantium nihil.
      </p>
    </div>
  );
}
