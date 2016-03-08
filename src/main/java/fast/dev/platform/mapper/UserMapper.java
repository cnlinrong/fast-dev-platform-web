package fast.dev.platform.mapper;

import fast.dev.platform.entity.User;

public interface UserMapper {

	public User findUserById(String id);
	
	public User findUserByUsername(String username);
	
	public int register(User user);
	
	public int updateUser(User user);
	
	public int deleteUser(String id);
	
}
