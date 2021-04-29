import { Request, Response } from 'express';
import registerBandBusiness from '../../business/band/registerBandBusiness';

const registerBand = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const token = req.headers.authorization as string;
    const { name, music_genre, responsible } = req.body;

    await registerBandBusiness({ name, music_genre, responsible }, token);

    return res.status(201).send({
      message: 'Success!',
      band: {
        name: name,
        music_genre: music_genre,
        responsible: responsible,
      },
    });
  } catch (err) {
    return res.status(400).send({ message: 'Failed!', error: err.message });
  }
};

export default registerBand;
