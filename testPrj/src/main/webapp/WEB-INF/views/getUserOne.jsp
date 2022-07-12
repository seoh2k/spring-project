<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>User</title>
</head>
<body>
<div>
	<h1>User</h1>
	<form action="/model/modifyUser" method="post">
		<table>
			<tbody>
				<tr>
					<td>id: </td>
					<td><input type="text" name="id" value="${user.id}" readonly="readonly"></td>
				</tr>
				<tr>
					<td>firstName: </td>
					<td><input type="text" name="firstName" value="${user.firstName}"></td>
				</tr>
				<tr>
					<td>lastName: </td>
					<td><input type="text" name="lastName" value="${user.lastName}"></td>
				</tr>
				<tr>
					<td>email: </td>
					<td><input type="text" name="email" value="${user.email}"></td>
				</tr>
				<tr>
					<td>gender: </td>
					<td>
						<select name="gender">
							<c:if test="${user.gender=='Male'}">
								<option value="Male">Male</option>
						    	<option value="Female">Female</option>
							</c:if>
							<c:if test="${user.gender=='Female'}">
								<option value="Female">Female</option>
								<option value="Male">Male</option>
							</c:if>
						</select>
					</td>
				</tr>
				<tr>
					<td>ipAddress: </td>
					<td><input type="text" name="ipAddress" value="${user.ipAddress}"></td>
				</tr>
				<tr>
					<td>lastUpdate: </td>
					<td>${user.lastUpdate}</td>
				</tr>
			</tbody>
		</table>
		<button type="submit">Update</button>
	</form>
	<form action="/model/removeUser" method="post">
		<input type="hidden" name="id" value="${user.id}">
		<button type="submit">Delete</button>
	</form>
	<button><a href="/model/">List</a></button>
</div>
</body>
</html>
