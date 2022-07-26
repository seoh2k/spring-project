package app.com.model;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeService {
	
	@Autowired 
	HomeMapper homeMapper;

	public List<Users> getUsersList() {
		
		return homeMapper.selectUsersList();
	}

	public Users getUserOne(int id) {
		
		return homeMapper.selectUserOne(id);
	}

	public void removeUser(int id) {
		
		homeMapper.deleteUser(id);
	}

	public void modifyUser(Users user) {

		homeMapper.updateUser(user);
	}

	public void addUser(Users user) {

		homeMapper.insertUser(user);
	}

	public int getUsersTotal() {
		
		return homeMapper.getUsersTotal();
	}

}
