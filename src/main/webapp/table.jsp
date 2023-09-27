<%@ page import="com.enifl33fi.lab2.model.ResultStorage" %>
<%@ page import="com.enifl33fi.lab2.model.Result" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <div class="scroll">
    <table id = "data-table">
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Date</th>
        <th>Script Time</th>
        <th>Result</th>
      </tr>
      <%
        ResultStorage storage = (ResultStorage) application.getAttribute("storage");
        if (storage != null) {
          for (Result result : storage.getResults()) {
            String stringResult = "Говно, переделывай";
            String colorResult = "#FF9999";
            if (result.isInArea()) {
              stringResult = "С пивом потянет";
              colorResult = "#99FF99";
            }
      %>
      <tr>
        <td class="td-0"><%= result.getX() %></td>
        <td class="td-1"><%= result.getY() %></td>
        <td class="td-2"><%= result.getR() %></td>
        <td class="td-3"><%= result.getCurDate() %></td>
        <td class="td-4"><%=result.getScriptTime()%></td>
        <td class="td-5" style="color: <%=colorResult%>"><%=stringResult%></td>
      </tr>
      <%
          }
        }
      %>
      <script>
        let dates = document.getElementsByClassName("td-3")
        for (let elem of dates) {
          let curDate = new Date(parseInt(elem.innerHTML));
          elem.innerHTML = curDate.toLocaleString();
        }
      </script>
    </table>
  </div>
