<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Users 
</h1>

<div>
	<button><a href="/model/addUser">Add</a></button>
	<table>
		<thead>
			<tr>
				<th>id</th>
				<th>first_name</th>
				<th>last_name</th>
				<th>email</th>
				<th>gender</th>
				<th>ip_address</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="u" items="${usersList}">
				<tr>
					<td>${u.id}</td>
					<td>${u.firstName}</td>
					<td>${u.lastName}</td>
					<td><a href="/model/getUserOne?id=${u.id}">${u.email}</a></td>
					<td>${u.gender}</td>
					<td>${u.ipAddress}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
</body>
</html>
