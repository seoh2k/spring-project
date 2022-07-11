<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>User</title>
</head>
<body>
<div>
	<table>
		<tbody>
			<tr>
				<td>id: </td>
				<td>${user.id}</td>
			</tr>
			<tr>
				<td>firstName: </td>
				<td>${user.firstName}</td>
			</tr>
			<tr>
				<td>lastName: </td>
				<td>${user.lastName}</td>
			</tr>
			<tr>
				<td>email: </td>
				<td>${user.email}</td>
			</tr>
			<tr>
				<td>gender: </td>
				<td>${user.gender}</td>
			</tr>
			<tr>
				<td>ipAddress: </td>
				<td>${user.ipAddress}</td>
			</tr>
		</tbody>
	</table>
	<button><a href="/model/modifyUser?id=${user.id}">수정</a></button>
	<form id="removeUser" action="/model/removeUser" method="post">
		<input type="hidden" name="id" value="${user.id}">
		<button type="submit">삭제</button>
	</form>
</div>
</body>
</html>
