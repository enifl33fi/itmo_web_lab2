<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Lab2</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/superagent"></script>
    <script defer src="static/js/validation.js"></script>
    <script defer src="static/js/dynamic_canvas.js"></script>
    <script defer src="static/js/dynamic_table.js"></script>
    <script defer src="static/js/control.js"></script>
    <link href="static/css/styles.css" rel="stylesheet">
</head>
<body id="anim-background">
<div class="container">
    <div class="data header">
        <img src="static/img/profile.jpeg" alt="profile" class="profile-pic"/>
        <div class="header-info">
            <p>Марков Кирилл Андреевич</p>
            <p>Группа: P3213</p>
            <p>Вариант: 2306</p>
            <a href="https://vk.com/enifleefi"><img src="static/img/vk_logo.png" alt="vk"></a>
            <a href="https://github.com/enifl33fi"><img src="static/img/github_logo.png" alt="github"></a>
            <a href="https://isu.ifmo.ru/pls/apex/f?p=2143:PERSON:108136793391922::NO:RP:PID:367380"><img src="static/img/itmo_logo.png" alt="itmo"></a>
        </div>
    </div>

    <div class="data main">
        <form action="${pageContext.request.contextPath}/handle" method="get" id = "data-form">
            <div class="inputs">
                <div class="single-field y-field">
                    <label for="y">Y</label>
                    <input id = "y" name="y" type="text" placeholder="от -5 до 3" onkeyup="validateY()"/>
                </div>

                <div class="single-field r-field">
                    <label for="r">R</label>
                    <input id = "r" name="r" type="text" placeholder="от 1 до 4" onkeyup="validateR(); fillCanvas()"/>
                </div>

                <div class="single-field x-field">
                    <fieldset>
                        <legend>X</legend>

                        <input id = "-3-x" type="radio" name = "x" value="-3" checked/>
                        <label for="-3-x"> -3</label>

                        <input id = "-2-x" type="radio" name = "x" value="-2"/>
                        <label for="-2-x"> -2</label>

                        <input id = "-1-x" type="radio" name = "x" value="-1"/>
                        <label for="-1-x"> -1</label>

                        <input id = "0-x" type="radio" name = "x" value="0"/>
                        <label for="0-x"> 0</label>

                        <input id = "1-x" type="radio" name = "x" value="1"/>
                        <label for="1-x"> 1</label>

                        <input id = "2-x" type="radio" name = "x" value="2"/>
                        <label for="2-x"> 2</label>

                        <input id = "3-x" type="radio" name = "x" value="3"/>
                        <label for="3-x"> 3</label>

                        <input id = "4-x" type="radio" name = "x" value="4"/>
                        <label for="4-x"> 4</label>

                        <input id = "5-x" type="radio" name = "x" value="5"/>
                        <label for="5-x"> 5</label>
                    </fieldset>
                </div>
                <div class="notification" id = "exception">
                    <p>
                        Параметр R введен неправильно!
                    </p>
                </div>
            </div>

            <div class = "additional">
                <div class="single-field picture-field">
                    <canvas width="250" height="250">
                        An alternative text describing what your canvas displays.
                    </canvas>
                </div>
                <input type="submit" value="Проверить" id="submit" disabled class = "hidden">
            </div>
        </form>

    </div>
    <div class="data table-data">
        <%@include file="table.jsp"%>
    </div>
</div>
<script>
    VANTA.BIRDS({
        el: "#anim-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        forceAnimate: true,
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
</html>