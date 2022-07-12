<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>add User</title>
</head>
<body>
<div>
	<h1>User</h1>
	<form action="/model/addUser" method="post">
		<table>
			<tbody>
				<tr>
					<td>firstName: </td>
					<td><input type="text" name="firstName" pattern="^[a-zA-Z]+$"></td>
				</tr>
				<tr>
					<td>lastName: </td>
					<td><input type="text" name="lastName" pattern="^[a-zA-Z]+$"></td>
				</tr>
				<tr>
					<td>email: </td>
					<td><input type="text" name="email"></td>
				</tr>
				<tr>
					<td>gender: </td>
					<td>
						<select name="gender">
						    <option value="Male">Male</option>
						    <option value="Female">Female</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>ipAddress: </td>
					<td><input type="text" name="ipAddress"></td>
				</tr>
			</tbody>
		</table>
		<button type="submit">Add</button>
	</form>
	<button><a href="/model/">List</a></button>
</div>
</body>
</html>
