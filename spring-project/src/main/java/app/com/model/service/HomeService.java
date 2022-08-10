package app.com.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.com.model.mapper.HomeMapper;
import app.com.model.vo.SearchVO;
import app.com.model.vo.Users;

@Service
public class HomeService {
	
	@Autowired 
	HomeMapper homeMapper;

	public List<Users> getUsersList(SearchVO searchVO) {
		
		return homeMapper.selectUsersList(searchVO);
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
