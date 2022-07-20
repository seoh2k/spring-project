<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>add User</title>
</head>
<body>
<div>
	<h1>User</h1>
	<form>
		<table>
			<tbody>
				<tr>
					<td>firstName: </td>
					<td><input type="text" id="firstName" pattern="^[a-zA-Z]+$"></td>
				</tr>
				<tr>
					<td>lastName: </td>
					<td><input type="text" id="lastName" pattern="^[a-zA-Z]+$"></td>
				</tr>
				<tr>
					<td>email: </td>
					<td><input type="text" id="email"></td>
				</tr>
				<tr>
					<td>gender: </td>
					<td>
						<select id="gender">
						    <option value="Male">Male</option>
						    <option value="Female">Female</option>
						</select>
					</td>
				</tr>
				<tr>
					<td>ipAddress: </td>
					<td><input type="text" id="ipAddress"></td>
				</tr>
			</tbody>
		</table>
		<button type="button" id="btn-save">Save</button>
		<button><a href="/model/">List</a></button>
	</form>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<!--index.js 추가-->
<script src="/model/resources/js/users.js"></script>

</body>
</html>
