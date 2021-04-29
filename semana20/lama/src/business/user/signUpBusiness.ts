import insertUser from '../../data/user/insertUser';
import { SignUpInput } from '../../model/user';
import { generateToken } from '../../services/authenticator';
import { hash } from '../../services/hash';
import createId from '../../services/idGen';

const signUpBusiness = async (input: SignUpInput) => {
  try {
    if (!input.email || !input.password || !input.name || !input.role) {
      throw new Error('Please fill all the fields.');
    }
    if (!input.email.includes('@')) {
      throw new Error('Invalid email.');
    }
    if (input.password.length < 6) {
      throw new Error('Password must have at least 6 characters.');
    }

    const id = createId() as string;
    const hashPassword = await hash(input.password);
    const token: string = generateToken({ id, role: input.role });

    await insertUser({
      id: id,
      email: input.email,
      name: input.name,
      password: hashPassword,
      role: input.role,
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signUpBusiness;
