<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>

<div>
	<table>
		<thead>
			<tr>id</tr>
			<tr>firstName</tr>
			<tr>lastName</tr>
			<tr>email</tr>
			<tr>gender</tr>
			<tr>ipAddress</tr>
		</thead>
		<tbody>
			<c:forEach var="u" items="${usersList}">
				<tr>
					<td>${u.id}</td>
					<td>${u.firstName}</td>
					<td>${u.lastName}</td>
					<td>${u.email}</td>
					<td>${u.gender}</td>
					<td>${u.ipAddress}</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>
</body>
</html>
