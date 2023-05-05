import NFTItem from "./NFTItem";

const NFTList = ({ NFTs }: any) => {
  return (
    <div className="flex flex-col mb-12">
      {NFTs?.map((NFT: any) => (
        <NFTItem NFT={NFT} key={NFT.id} />
      ))}
    </div>
  );
};

export default NFTList;
