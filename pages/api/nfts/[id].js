// import type { NextApiRequest, NextApiResponse } from 'next';
import { nfts } from '../../../data';
// type Data = {
//   id: number | string | string[] | undefined,
//   verified: boolean,
//   image: string,
//   date: string,
//   name: string,
//   website: string,
//   twitter: string,
//   discord: string,
//   marketplaceURL: string,
//   marketplace: string,
//   marketplaceName: string,
//   blockchain: string,
//   blockchainName: string,
//   contract: string,
//   ausist: string,
//   description: string,
//   tags: string,
// };
export default function handler(req, res) {
  const { id } = req.query;
  const nft = nfts.find((nft) => nft.id == parseInt(id));
  res.status(200).json(nft);
}
