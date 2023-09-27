<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<html>
<head>
    <title>Lab2</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
    <link href="static/css/styles.css" rel="stylesheet">
</head>
<body id="anim-background">
<div class="container">
    <div class="data table-data">
        <a href="${pageContext.request.contextPath}/index.jsp" class="back"><img src="static/img/back.png" alt="go back"/></a>
        <%@include file="table.jsp"%>
    </div>
</div>
<script>
    VANTA.BIRDS({
        el: "#anim-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        color1: 0x0,
        color2: 0xffffff,
        colorMode: "lerp",
        wingSpan: 13.00,
        backgroundAlpha: 0.00
    })
</script>
</body>
</body>
</html>
