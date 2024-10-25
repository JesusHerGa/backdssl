const userRepository = require('../repositories/userRepository')
const UserRepository = require('../repositories/userRepository')
class UserService {
    getAllUsers(){
        return userRepository.findAll();
    }

    getUserById(id){
        return userRepository.findById();
    }

    createUser(userData){
        return userRepository.create(userData);
    }

    updateUser(id, userData){
        return userRepository.update(userData);

    }

    deleteUser(id){
        return userRepository.delete(userData);
    }

}
module.exports = new UserService;