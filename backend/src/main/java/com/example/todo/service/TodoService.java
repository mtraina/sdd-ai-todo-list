package com.example.todo.service;

import com.example.todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TodoService {
    private final Map<Long, Todo> store = new ConcurrentHashMap<>();
    private final AtomicLong idGen = new AtomicLong(0);

    public List<Todo> findAll() {
        return new ArrayList<>(store.values());
    }

    public Todo create(Todo t) {
        long id = idGen.incrementAndGet();
        t.setId(id);
        store.put(id, t);
        return t;
    }

    public Optional<Todo> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    public Optional<Todo> update(Long id, Todo t) {
        if (!store.containsKey(id)) return Optional.empty();
        t.setId(id);
        store.put(id, t);
        return Optional.of(t);
    }

    public boolean delete(Long id) {
        return store.remove(id) != null;
    }
}
