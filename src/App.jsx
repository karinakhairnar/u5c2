import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from './Components/eye.svg'
function App() {
  const onChange = (text) => {
    console.log(text);
  }
  const rightLogoOnClick = () => { }
  return (
    <div className="container">
      <Input
        rightLogo={Eye}
        onChange={onChange}
        rightLogoOnClick={rightLogoOnClick}
        variant={"filled"}
        size="lg"
      />

      <Image data-testid="image" borderRadius={100} alt="image" src={"https://via.placeholder.com/150"} width={200} height={200} fit={"fill"} />

      <Pagination />
    </div>
  );
}

export default App;