package app.com.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeService {
	
	@Autowired 
	HomeMapper homeMapper;

	public List<Users> getUsersList() {
		
		List<Users> userList = homeMapper.selectUsersList();
		
		return userList;
	}

}
