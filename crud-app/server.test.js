const request = require('supertest');
const app = require('./server');

describe('CRUD API', () => {
  test('GET / - welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to the CRUD API');
  });

  test('GET /items - returns empty array initially', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('POST /items - creates a new item', async () => {
    const res = await request(app).post('/items').send({ name: 'Test Item', description: 'Test description' });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Item created successfully');
    expect(res.body.item).toHaveProperty('id');
    expect(res.body.item.name).toBe('Test Item');
  });

  test('POST /items - fails with invalid name', async () => {
    const res = await request(app).post('/items').send({ name: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Name is required and must be a non-empty string');
  });

  test('PUT /items/:id - updates an item', async () => {
    const createRes = await request(app).post('/items').send({ name: 'Item to Update' });
    const itemId = createRes.body.item.id;
    const updateRes = await request(app).put(`/items/${itemId}`).send({ name: 'Updated Item' });
    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.message).toBe('Item updated successfully');
    expect(updateRes.body.item.name).toBe('Updated Item');
  });

  test('PUT /items/:id - fails for non-existent item', async () => {
    const res = await request(app).put('/items/999').send({ name: 'Non-existent' });
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Item not found');
  });

  test('DELETE /items/:id - deletes an item', async () => {
    const createRes = await request(app).post('/items').send({ name: 'Item to Delete' });
    const itemId = createRes.body.item.id;
    const deleteRes = await request(app).delete(`/items/${itemId}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body.message).toBe('Item deleted successfully');
  });

  test('DELETE /items/:id - fails for non-existent item', async () => {
    const res = await request(app).delete('/items/999');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Item not found');
  });
});