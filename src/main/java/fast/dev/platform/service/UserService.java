package fast.dev.platform.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import fast.dev.platform.entity.User;
import fast.dev.platform.mapper.UserMapper;

@Service
public class UserService {

	@Resource
	private UserMapper userMapper;
	
	public User findUserByAccount(String account) {
		return userMapper.findUserByAccount(account);
	}
	
}
