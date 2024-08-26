import User from "../models/users.model";

class UserService {
  async createUser(data: any) {
    return User.create(data);
  }

  async getUsers() {
    return User.find();
  }

  async getUser(id: string) {
    return User.findById(id);
  }

  async updateUser(id: string, data: any) {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id: string) {
    return User.findByIdAndDelete(id);
  }

  async loginUser(email: string) {
    return User.findOne({ email });
  }
}

export default UserService;
