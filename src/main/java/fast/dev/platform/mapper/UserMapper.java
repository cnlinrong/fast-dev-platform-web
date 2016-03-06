package fast.dev.platform.mapper;

import fast.dev.platform.entity.User;

public interface UserMapper {

	public User findUserByAccount(String account);
	
}
