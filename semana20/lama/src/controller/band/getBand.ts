import { Request, Response } from 'express';
import getBandBusiness from '../../business/band/getBandBusiness';

const getBand = async (req: Request, res: Response): Promise<Response> => {
  try {
    const token = req.headers.authorization as string;
    const bandId = req.query.id as string;
    const bandName = req.query.name as string;

    const band = await getBandBusiness(token, bandId, bandName);

    return res.status(200).send({
      message: 'Success!',
      band: band,
    });
  } catch (err) {
    return res.status(400).send({ message: 'Failed!', error: err.message });
  }
};

export default getBand;
