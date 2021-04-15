import queryUserByEmail from '../data/queryUserByEmail';
import { SignInInput, User } from '../model/user';
import { generateToken } from '../services/authenticator';
import { compare } from '../services/hash';

const signInBusiness = async (input: SignInInput): Promise<string> => {
  try {
    if (!input.email || !input.password) {
      throw new Error('Please fill all the fields.');
    }
    const user: User = await queryUserByEmail(input.email);

    if (!user) {
      throw new Error('User not found.');
    }

    const compareResult: boolean = await compare(input.password, user.password);

    if (!compareResult) {
      throw new Error('Incorrect password.');
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signInBusiness;
