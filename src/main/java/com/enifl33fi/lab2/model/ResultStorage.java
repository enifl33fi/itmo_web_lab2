package com.enifl33fi.lab2.model;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class ResultStorage {
    List<Result> data = new CopyOnWriteArrayList<>();
    public void addResult(Result result) {
        data.add(result);
    }
    public List<Result> getResults() {
        return data;
    }
}
