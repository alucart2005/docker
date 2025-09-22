const express = require('express');

const app = express();

app.use(express.json());

let items = [];

let idCounter = 1;

// Routes

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the CRUD API',
    endpoints: {
      'GET /items': 'Get all items',
      'POST /items': 'Create a new item (body: { "name": "string", "description": "string" })',
      'PUT /items/:id': 'Update an item by ID',
      'DELETE /items/:id': 'Delete an item by ID'
    }
  });
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  if (!req.body.name || typeof req.body.name !== 'string' || req.body.name.trim() === '') {
    return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
  }
  const item = { id: idCounter++, name: req.body.name.trim(), description: req.body.description || '' };
  items.push(item);
  res.status(201).json({ message: 'Item created successfully', item });
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    if (!req.body.name || typeof req.body.name !== 'string' || req.body.name.trim() === '') {
      return res.status(400).json({ error: 'Name is required and must be a non-empty string' });
    }
    items[index] = { id, name: req.body.name.trim(), description: req.body.description || '' };
    res.json({ message: 'Item updated successfully', item: items[index] });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;