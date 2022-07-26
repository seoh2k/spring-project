package app.com.model;

import java.text.DateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
	public List<Users> read() {
		return homeService.getUsersList();
	}
	
	@RequestMapping(value = "/getUserOne")
	public String getUserOne(Model model,
								@RequestParam(value="id", required = true) int id,
								@RequestParam(value="currentPage", required = true) int currentPage) {
		
		Users user = homeService.getUserOne(id);
		
		model.addAttribute("user", user);
		model.addAttribute("currentPage", currentPage);
		
		return "getUserOne";
	}
	
	@ResponseBody
	@RequestMapping(value = "/removeUser/{id}", method = RequestMethod.POST)
	public String removeUser(@PathVariable int id) {
		
		homeService.removeUser(id);
		
		return "redirect:/";
	}
	
	@ResponseBody
	@RequestMapping(value = "/modifyUser/{id}", method = RequestMethod.POST)
	public void modifyUser(@RequestBody Users user) {
		
		homeService.modifyUser(user);
	}
	
	@RequestMapping(value = "/addUser", method = RequestMethod.GET)
	public String addUser() {
		
		return "addUser";
	}
	
	@ResponseBody
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public void addUser(@RequestBody Users user) {
		
		homeService.addUser(user);
	}
}
