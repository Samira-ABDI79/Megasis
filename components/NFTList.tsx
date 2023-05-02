import NFTStyles from "../styles/NFT.module.css";

import NFTItem from "./NFTItem";




const NFTList = ({ NFTs }: any) => {

  return (

    <div className={NFTStyles.grid}>

      {NFTs?.map((NFT: any) => (

        <NFTItem NFT={NFT} key={NFT.id} />

      ))}

    </div>

  );

};




export default NFTList;