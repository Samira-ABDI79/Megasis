import headerStyles from "../../styles/Header.module.css";




const Header = () => {

  return (

    <div>

      <h1 className={headerStyles.title}>

        <span>Roxo </span>

        Next.js Demo

      </h1>

      <p className={headerStyles.description}>

        Keep in touch with the programming world

      </p>

    </div>

  );

};




export default Header;