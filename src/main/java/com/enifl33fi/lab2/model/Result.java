package com.enifl33fi.lab2.model;

public class Result {
    private final double x;
    private final double y;
    private final double r;
    private final boolean inArea;
    private final String scriptTime;
    private final long curDate;

    public Result(double x, double y, double r, String scriptTime, long curDate) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.scriptTime = scriptTime;
        this.inArea = isDotInArea(x, y, r);
        this.curDate = curDate;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getScriptTime() {
        return scriptTime;
    }

    public long getCurDate() {
        return curDate;
    }

    public boolean isInArea() {
        return inArea;
    }

    private boolean isDotInArea(double x, double y, double r) {
        return inInSquare(x, y, r) || isInTriangle(x, y, r) || isInCircle(x, y, r);
    }

    private boolean inInSquare(double x, double y, double r) {
        return (x <= 0 && x >= -(r / 2)) && (y <= 0 && y >= -r);
    }
    private boolean isInTriangle(double x, double y, double r) {
        return (x >= 0 && y <= 0) && (y - 2 * x + r) >= 0;
    }
    private boolean isInCircle(double x, double y, double r) {
        return (x >= 0 && y >= 0) && (x * x + y * y - (r * r) / 4) <= 0;
    }
}
