package com.enifl33fi.lab2.servlets;

import java.io.*;

import com.enifl33fi.lab2.utils.PointValidator;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "controllerServlet", value = "/handle")
public class ControllerServlet extends HttpServlet {
    private final PointValidator validator = new PointValidator();

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        String x = req.getParameter("x");
        String y = req.getParameter("y");
        String r = req.getParameter("r");
        if (validator.validate(x, y, r)) {
            RequestDispatcher requestDispatcher = req.getRequestDispatcher("/check");
            requestDispatcher.forward(req, resp);
        } else {
            resp.sendRedirect("index.jsp");
        }
    }

    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.sendRedirect("index.jsp");
    }
}