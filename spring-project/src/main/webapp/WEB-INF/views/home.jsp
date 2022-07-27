<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<title>Home</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
	<script src="https://unpkg.com/axios/dist/axios.min.js" defer></script>
	<script type="module" src="/model/resources/js/index.js"></script>
</head>
<body>

<div id="app">
	<h1>Users</h1>
	
	<button class="btn btn-outline-primary"><a href="/model/addUser">Add</a></button>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">id</th>
				<th scope="col">first_name</th>
				<th scope="col">last_name</th>
				<th scope="col">email</th>
				<th scope="col">gender</th>
				<th scope="col">ip_address</th>
			</tr>
		</thead>
		<tbody>
			<%-- <c:forEach var="u" items="${usersList}"> --%>
			<tr v-for="item in users">
				<td scope="row">{{ item.id }}</td>
				<td>{{ item.firstName }}</td>
				<td>{{ item.lastName }}</td>
				<td>{{ item.email }}</a></td>
				<td>{{ item.gender }}</td>
				<td>{{ item.ipAddress }}</td>
			</tr>
			<%-- </c:forEach> --%>
		</tbody>
	</table>
	
	<ul>
        <c:if test="${currentPage > 1}">
            <button class="previous btn btn-outline-primary"><a href="/model/?currentPage=${currentPage-1}">previous</a></button>
        </c:if>
        <c:if test="${currentPage < lastPage}">
            <button class="next btn btn-outline-primary"><a href="/model/?currentPage=${currentPage+1}">next</a></button>
        </c:if>
    </ul>
</div>
</body>
</html>
