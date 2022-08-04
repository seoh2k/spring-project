package app.com.model;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import app.com.model.vo.SearchVO;

@Repository
public class HomeMapper {

	@Autowired
	SqlSessionTemplate session;
	
	public List<Users> selectUsersList(SearchVO searchVO) {

		return session.selectList("app.com.model.HomeMapper.selectUsersList", searchVO);
	}

//	public List<Users> selectUsersList();
	
	public Users selectUserOne(int id) {
		
		return session.selectOne("app.com.model.HomeMapper.selectUserOne", id);
	}

	public void deleteUser(int id) {
		
		session.delete("app.com.model.HomeMapper.deleteUser", id);
	}

	public void updateUser(Users user) {

		session.update("app.com.model.HomeMapper.updateUser", user);
	}

	public void insertUser(Users user) {

		session.insert("app.com.model.HomeMapper.insertUser", user);
	}

	public int getUsersTotal() {
		// TODO Auto-generated method stub
		return session.selectOne("app.com.model.HomeMapper.getUsersTotal");
	}
}
