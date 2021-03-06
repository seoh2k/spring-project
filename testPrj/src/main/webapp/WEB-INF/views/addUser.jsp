<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>add User</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
<div>
	<h1>User</h1>
	<form>
		<div class="mb-3">
		    <label for="firstName" class="form-label">First Name</label>
		    <input type="text" class="form-control" id="firstName">
		</div>
		<div class="mb-3">
		    <label for="lastName" class="form-label">Last Name</label>
		    <input type="text" class="form-control" id="lastName">
		</div>
		<div class="mb-3">
		    <label for="email" class="form-label">Email</label>
		    <input type="text" class="form-control" id="email">
		</div>
		<div class="mb-3">
			<label for="gender" class="form-label">Gender</label>
		    <select id="gender" class="form-select" aria-label="Default select example">
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
		</div>
		<div class="mb-3">
		    <label for="ipAddress" class="form-label">IP Address</label>
		    <input type="text" class="form-control" id="ipAddress">
		</div>
		
		<button type="button" id="btn-save" class="btn btn-outline-primary">Save</button>
		<button class="btn btn-outline-primary"><a href="/model/">List</a></button>
	</form>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<!--index.js 추가-->
<script src="/model/resources/js/users.js"></script>

</body>
</html>
