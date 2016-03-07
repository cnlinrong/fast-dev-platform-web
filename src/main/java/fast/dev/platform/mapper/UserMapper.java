package fast.dev.platform.mapper;

import fast.dev.platform.entity.User;

public interface UserMapper {

	public User findUserByAccount(String account);
	
	public void register(User user);
	
	public void updateUser(User user);
	
	public void deleteUser(String id);
	
}
