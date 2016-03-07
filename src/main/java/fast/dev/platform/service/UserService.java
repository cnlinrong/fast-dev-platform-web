package fast.dev.platform.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fast.dev.platform.entity.User;
import fast.dev.platform.mapper.UserMapper;

@Service
public class UserService {

	@Resource
	private UserMapper userMapper;
	
	public User findUserByAccount(String account) {
		return userMapper.findUserByAccount(account);
	}
	
	@Transactional
	public void register(User user) {
		userMapper.register(user);
	}
	
	@Transactional
	public void updateUser(User user) {
		userMapper.updateUser(user);
	}
	
	@Transactional
	public void deleteUser(String id) {
		userMapper.deleteUser(id);
	}
	
}
