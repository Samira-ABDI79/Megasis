import Link from "next/link";

import nftStyles from "../styles/nft.module.css";




const NftItem = ({ NFT }: any) => {
  console.log("samira"+NFT)

  return (

    <Link href={`/nft/${NFT?.id}`}>

      <div className={nftStyles.card}>

        <h3>{NFT.name} &rarr;</h3>

        <p>{NFT.description}</p>

      </div>

    </Link>

  );

};




export default NftItem;