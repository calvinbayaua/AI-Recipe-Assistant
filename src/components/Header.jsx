import Claude from "../assets/Chef Claude Icon.png";

export default function Header() {
  return (
    <header>
      <img src={Claude} className='claude-img' alt="claude img"></img>
      <h1>Chef Claude</h1>
    </header>
  );
}
