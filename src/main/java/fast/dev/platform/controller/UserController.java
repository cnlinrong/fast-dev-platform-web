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
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String toLogin() {
		return "login";
	}
	
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
	
}
