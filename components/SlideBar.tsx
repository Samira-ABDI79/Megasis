import Blockchain from './Blockchains';
import Tags from './Tags';

function SlideBar() {
  return (
    <div className=" flex-col lg:flex hidden">
      <Blockchain />
      <Tags />
    </div>
  );
}
export default SlideBar;
