package fast.dev.platform.controller;

import javax.annotation.Resource;

import org.apache.commons.codec.digest.Md5Crypt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.JsonObject;

import fast.dev.platform.controller.base.BaseController;
import fast.dev.platform.entity.User;
import fast.dev.platform.service.UserService;

@Controller
public class UserController extends BaseController {

	@Resource
	private UserService userService;
	
	@ResponseBody
	@RequestMapping(value = "/login", method=RequestMethod.POST)
	public String login(@RequestParam(required=true) String account, @RequestParam(required=true) String password) {
		JsonObject result = new JsonObject();
		User user = userService.findUserByAccount(account);
		if (user != null) {
			if (Md5Crypt.md5Crypt(password.getBytes()).equals(user.getPassword())) {
				result.addProperty("status", "ok");
				result.addProperty("msg", "登录成功");
			} else {
				result.addProperty("status", "fail");
				result.addProperty("msg", "密码错误");
			}
		} else {
			result.addProperty("status", "fail");
			result.addProperty("msg", "用户不存在");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/register", method=RequestMethod.POST)
	public String register(User user) {
		JsonObject result = new JsonObject();
		try {
			userService.updateUser(user);
			result.addProperty("status", "ok");
			result.addProperty("msg", "注册成功");
		} catch (Exception e) {
			e.printStackTrace();
			
			result.addProperty("status", "fail");
			result.addProperty("msg", "注册失败");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateUser", method=RequestMethod.POST)
	public String updateUser(User user) {
		JsonObject result = new JsonObject();
		try {
			userService.updateUser(user);
			result.addProperty("status", "ok");
			result.addProperty("msg", "更新成功");
		} catch (Exception e) {
			e.printStackTrace();
			
			result.addProperty("status", "fail");
			result.addProperty("msg", "更新失败");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/deleteUser", method=RequestMethod.POST)
	public String deleteUser(@RequestParam(required=true) String id) {
		JsonObject result = new JsonObject();
		try {
			userService.deleteUser(id);
			result.addProperty("status", "ok");
			result.addProperty("msg", "删除成功");
		} catch (Exception e) {
			e.printStackTrace();
			
			result.addProperty("status", "fail");
			result.addProperty("msg", "删除失败");
		}
		return result.toString();
	}
	
}
