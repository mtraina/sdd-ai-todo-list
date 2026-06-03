package com.example.todo.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

public class TodoJsonTest {

    private final ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());

    @Test
    public void serializesAndDeserializesDueDate() throws Exception {
        Todo t = new Todo(1L, "Test", false, LocalDate.of(2026,6,30));

        String json = mapper.writeValueAsString(t);
        assertTrue(json.contains("2026-06-30"), "JSON should contain date string");

        Todo parsed = mapper.readValue(json, Todo.class);
        assertNotNull(parsed.getDueDate());
        assertEquals(LocalDate.of(2026,6,30), parsed.getDueDate());
    }

    @Test
    public void handlesMissingDueDateAsNull() throws Exception {
        Todo t = new Todo(2L, "NoDate", true);

        String json = mapper.writeValueAsString(t);
        // should not contain dueDate field value
        Todo parsed = mapper.readValue(json, Todo.class);
        assertNull(parsed.getDueDate());
    }
}
