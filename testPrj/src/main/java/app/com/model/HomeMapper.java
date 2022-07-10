package app.com.model;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class HomeMapper {

	@Autowired
	SqlSessionTemplate session;
	
	public List<Users> selectUsersList() {
		List<Users> list = session.selectList("app.com.model.HomeMapper.selectUsersList");
		
		/*for(int i=0; i<list.size(); i++) {
			System.out.println(list.get(i));
		}*/
		
		return session.selectList("app.com.model.HomeMapper.selectUsersList");
	}

//	public List<Users> selectUsersList();

}
