package app.com.model.mapper;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import app.com.model.vo.SearchVO;
import app.com.model.vo.Users;

@Repository
public class HomeMapper {

	@Autowired
	SqlSessionTemplate session;
	
	private static final String NAMESPACE = "HomeMapper";
	
	public List<Users> selectUsersList(SearchVO searchVO) {

		return session.selectList(NAMESPACE+".selectUsersList", searchVO);
	}

//	public List<Users> selectUsersList();
	
	public Users selectUserOne(int id) {
		
		return session.selectOne(NAMESPACE+".selectUserOne", id);
	}

	public void deleteUser(int id) {
		
		session.delete(NAMESPACE+".deleteUser", id);
	}

	public void updateUser(Users user) {

		session.update(NAMESPACE+".updateUser", user);
	}

	public void insertUser(Users user) {

		session.insert(NAMESPACE+".insertUser", user);
	}

	public int getUsersTotal() {
		// TODO Auto-generated method stub
		return session.selectOne(NAMESPACE+".getUsersTotal");
	}
}
