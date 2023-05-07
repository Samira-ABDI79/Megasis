import type { NextApiRequest, NextApiResponse } from 'next';
import { nfts } from '../../../data';
type Data = {
  id: number;
  verified: boolean;
  image: string;
  date: string;
  name: string;
  website: string;
  twitter: string;
  discord: string;
  marketplaceURL: string;
  marketplace: string;
  marketplaceName: string;
  blockchain: string;
  blockchainName: string;
  contract: string;
  ausist: string;
  description: string;
  tags: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(nfts);
}
