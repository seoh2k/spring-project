package app.com.model;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import app.com.model.vo.SearchVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired 
	HomeService homeService;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "home";
	}
	
	@RequestMapping(value = "/read", method = RequestMethod.GET)
	@ResponseBody
	public List<Users> read(SearchVO searchVO) {
		return homeService.getUsersList(searchVO);
	}
	
	/*@RequestMapping(value = "/getUserOne/{id}")
	public String getUserOne(Model model, @PathVariable int id) {
		return "getUserOne";
	}*/
	
	@RequestMapping(value = "/getUserById/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Users getUserById(@PathVariable int id) {
		
		return homeService.getUserOne(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/removeUser/{id}", method = RequestMethod.POST)
	public void removeUser(@PathVariable int id) {
		
		homeService.removeUser(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/modifyUser/{id}", method = RequestMethod.POST)
	public void modifyUser(@RequestBody Users user,
							@PathVariable int id) {
		
		homeService.modifyUser(user);
	}
	
	/*@RequestMapping(value = "/addUser", method = RequestMethod.GET)
	public String addUser() {
		
		return "addUser";
	}*/
	
	@ResponseBody
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public void addUser(@RequestBody Users user) {
		
		homeService.addUser(user);
	}
}
