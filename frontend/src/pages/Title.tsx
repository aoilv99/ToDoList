import Logo from '../assets/TODOLISTロゴ.png';
import LogoImg from '../assets/マカロン.png';

function Title() {
  return (
    <div className="w-full h-screen bg-pink-200 flex flex-col items-center justify-center">
      
      <div className="relative flex flex-col items-center">
        {/* TO DO LISTロゴ */}
        <img
          src={Logo}
          alt="TO DO LIST"
          className="z-10"
        />
        
        {/* マカロン画像（ロゴに重なるように配置） */}
        <img
          src={LogoImg}
          alt="マカロン"
          className="-mt-20 z-0 mr-7"
        />
      </div>
    </div>
  );
}

export default Title;