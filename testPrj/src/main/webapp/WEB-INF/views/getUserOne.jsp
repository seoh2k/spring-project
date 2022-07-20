<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>User</title>
</head>
<body>
<div>
	<h1>User</h1>
	<form>
		<table>
			<tbody>
				<tr>
					<td>id: </td>
					<td><input type="text" id="id" value="${user.id}" readonly="readonly"></td>
				</tr>
				<tr>
					<td>firstName: </td>
					<td><input type="text" id="firstName" value="${user.firstName}"></td>
				</tr>
				<tr>
					<td>lastName: </td>
					<td><input type="text" id="lastName" value="${user.lastName}"></td>
				</tr>
				<tr>
					<td>email: </td>
					<td><input type="text" id="email" value="${user.email}"></td>
				</tr>
				<tr>
					<td>gender: </td>
					<td>
						<select id="gender">
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
					<td><input type="text" id="ipAddress" value="${user.ipAddress}"></td>
				</tr>
				<tr>
					<td>lastUpdate: </td>
					<td>${user.lastUpdate}</td>
				</tr>
			</tbody>
		</table>
		<button type="button" id="btn-update">Update</button>
	</form>
	<form action="/model/removeUser" method="post">
		<input type="hidden" name="id" value="${user.id}">
		<button type="submit">Delete</button>
	</form>
	<button><a href="/model/">List</a></button>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<!--index.js 추가-->
<script src="/model/resources/js/users.js"></script>

</body>
</html>
