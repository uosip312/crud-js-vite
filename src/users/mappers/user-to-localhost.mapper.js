import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const userModelToLocalhost = ( user ) => {

    const {
        avatar,
        balance, 
        firstName,
        gender,
        id, 
        isActive, 
        lastName,
    } = user;

    return { 
        avatar, 
        balance, 
        first_name: firstName, 
        gender,
        id, 
        isActive, 
        last_name: lastName, 
    };
}