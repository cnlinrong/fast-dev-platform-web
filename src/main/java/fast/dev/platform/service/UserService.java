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
	
	public User findUserById(String id) {
		return userMapper.findUserById(id);
	}
	
	public User findUserByAccount(String account) {
		return userMapper.findUserByAccount(account);
	}
	
	@Transactional
	public int register(User user) {
		return userMapper.register(user);
	}
	
	@Transactional
	public int updateUser(User user) {
		return userMapper.updateUser(user);
	}
	
	@Transactional
	public int deleteUser(String id) {
		return userMapper.deleteUser(id);
	}
	
}
