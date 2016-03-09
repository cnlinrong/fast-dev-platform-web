package fast.dev.platform.controller;

import java.util.Date;

import javax.annotation.Resource;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import fast.dev.platform.controller.base.BaseController;
import fast.dev.platform.entity.User;
import fast.dev.platform.service.UserService;
import fast.dev.platform.util.CommonUtils;
import fast.dev.platform.util.MD5Utils;

@Controller
public class UserController extends BaseController {

	@Resource
	private UserService userService;
	
	@ResponseBody
	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = { "application/json;charset=UTF-8" })
	public String login(@RequestParam(required = true) String username, @RequestParam(required = true) String password) {
		JSONObject result = new JSONObject();
		User user = userService.findUserByUsername(username);
		if (user != null) {
			if (MD5Utils.toMD5(password).equals(user.getPassword())) {
				result.put("status", "ok");
				result.put("msg", "登录成功");
			} else {
				result.put("status", "fail");
				result.put("msg", "密码错误");
			}
		} else {
			result.put("status", "fail");
			result.put("msg", "用户不存在");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/findUser", method = RequestMethod.GET, produces = { "application/json;charset=UTF-8" })
	public String findUser() {
		JSONObject result = new JSONObject();
		User user = userService.findUserById("B80AB5AFAFC94CDB8C8EFEFD0A92BB62");
		if (user != null) {
			if (MD5Utils.toMD5("123456").equals(user.getPassword())) {
				result.put("status", "ok");
				result.put("msg", "登录成功");
				result.put("data", new JSONObject(user));
			} else {
				result.put("status", "fail");
				result.put("msg", "密码错误");
			}
		} else {
			result.put("status", "fail");
			result.put("msg", "用户不存在");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/register", method = RequestMethod.POST, consumes = "application/json", produces = {
			"application/json;charset=UTF-8" })
	public String register(@RequestBody(required = true) User user) {
		JSONObject result = new JSONObject();
		try {
			user.setId(CommonUtils.generateUUID());
			long time = new Date().getTime();
			user.setCreate_time(time);
			user.setUpdate_time(time);
			int num = userService.register(user);
			if (num > 0) {
				result.put("status", "ok");
				result.put("msg", "注册成功");
			} else {
				result.put("status", "fail");
				result.put("msg", "注册失败");
			}
		} catch (Exception e) {
			e.printStackTrace();

			result.put("status", "fail");
			result.put("msg", "注册失败");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateUser", method=RequestMethod.POST, produces = { "application/json;charset=UTF-8" })
	public String updateUser(User user) {
		JSONObject result = new JSONObject();
		try {
			int num = userService.updateUser(user);
			if (num > 0) {
				result.put("status", "ok");
				result.put("msg", "更新成功");
			} else {
				result.put("status", "fail");
				result.put("msg", "更新失败");
			}
		} catch (Exception e) {
			e.printStackTrace();
			
			result.put("status", "fail");
			result.put("msg", "更新失败");
		}
		return result.toString();
	}
	
	@ResponseBody
	@RequestMapping(value = "/deleteUser", method=RequestMethod.POST, produces = { "application/json;charset=UTF-8" })
	public String deleteUser(@RequestParam(required=true) String id) {
		JSONObject result = new JSONObject();
		try {
			int num = userService.deleteUser(id);
			if (num > 0) {
				result.put("status", "ok");
				result.put("msg", "删除成功");
			} else {
				result.put("status", "fail");
				result.put("msg", "删除失败");
			}
		} catch (Exception e) {
			e.printStackTrace();
			
			result.put("status", "fail");
			result.put("msg", "删除失败");
		}
		return result.toString();
	}
	
}
