package fast.dev.platform.util;

import java.util.UUID;

public class CommonUtils {

	/**
	 * 生成UUID
	 * 
	 * @return
	 */
	public static String generateUUID() {
		return UUID.randomUUID().toString().replaceAll("-", "").toUpperCase();
	}
	
}
