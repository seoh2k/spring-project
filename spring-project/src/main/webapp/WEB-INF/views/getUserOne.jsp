<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>User</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
<div>
	<h1>User</h1>
	<form>
		<div class="mb-3">
		    <label for="id" class="form-label">Id</label>
		    <input type="text" class="form-control" id="id" value="${user.id}" readonly="readonly">
		</div>
		<div class="mb-3">
		    <label for="firstName" class="form-label">First Name</label>
		    <input type="text" class="form-control" id="firstName" value="${user.firstName}">
		</div>
		<div class="mb-3">
		    <label for="lastName" class="form-label">Last Name</label>
		    <input type="text" class="form-control" id="lastName" value="${user.lastName}">
		</div>
		<div class="mb-3">
		    <label for="email" class="form-label">Email</label>
		    <input type="text" class="form-control" id="email" value="${user.email}">
		</div>
		<div class="mb-3">
			<label for="gender" class="form-label">Gender</label>
		    <select id="gender" class="form-select" aria-label="Default select example">
		    	<c:if test="${user.gender=='Male'}">
					<option value="Male">Male</option>
			    	<option value="Female">Female</option>
				</c:if>
				<c:if test="${user.gender=='Female'}">
					<option value="Female">Female</option>
					<option value="Male">Male</option>
				</c:if>
			</select>
		</div>
		<div class="mb-3">
		    <label for="ipAddress" class="form-label">IP Address</label>
		    <input type="text" class="form-control" id="ipAddress" value="${user.ipAddress}">
		</div>
		<div class="mb-3">
		    <label for="lastUpdate" class="form-label">Last Update</label>
		    <input type="text" class="form-control" id="lastUpdate" value="${user.lastUpdate}" readonly="readonly">
		</div>
		
		<button type="button" id="btn-update" class="btn btn-outline-primary">Update</button>
		<button type="button" id="btn-delete" class="btn btn-outline-primary">Delete</button>
		<button class="btn btn-outline-primary"><a href="/model/?currentPage=${currentPage}">List</a></button>
	</form>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<!--index.js 추가-->
<script src="/model/resources/js/users.js"></script>

</body>
</html>
