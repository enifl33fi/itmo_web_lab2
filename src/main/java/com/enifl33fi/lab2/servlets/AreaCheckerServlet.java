package com.enifl33fi.lab2.servlets;

import com.enifl33fi.lab2.model.Result;
import com.enifl33fi.lab2.model.ResultStorage;
import com.enifl33fi.lab2.utils.PointValidator;
import com.google.gson.Gson;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Locale;

@WebServlet(name = "areaCheckerServlet", value = "/check")
public class AreaCheckerServlet extends HttpServlet {
    private final PointValidator validator = new PointValidator();
    private final Gson gson = new Gson();

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long startTime = System.nanoTime() / 1000;

        String x = req.getParameter("x");
        String y = req.getParameter("y");
        String r = req.getParameter("r");

        if (validator.validate(x, y, r)) {
            ServletContext context = getServletContext();
            ResultStorage storage = (ResultStorage) context.getAttribute("storage");

            if (storage == null) {
                storage = new ResultStorage();
            }

            double xVal = Double.parseDouble(x);
            double yVal = Double.parseDouble(y);
            double rVal = Double.parseDouble(r);
            long curTime = System.nanoTime() / 1000;
            double scriptTime = (curTime - startTime) / 1000.0;
            Result result = new Result(xVal, yVal, rVal, String.format(Locale.ENGLISH, "%.3fms", scriptTime), System.currentTimeMillis());

            storage.addResult(result);
            context.setAttribute("storage", storage);
            String status = req.getParameter("status");
            switch (status) {
                case "fromForm" -> resp.sendRedirect("results.jsp");
                case "fromCanvas" -> {
                    resp.setContentType("application/json");
                    PrintWriter out = resp.getWriter();
                    out.println(gson.toJson(result));
                }
                default -> resp.sendRedirect("index.jsp");
            }

        } else {
            resp.sendRedirect("index.jsp");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("index.jsp");
        requestDispatcher.forward(req, resp);
    }
}
