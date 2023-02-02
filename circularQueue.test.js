const CircularQueue = require("./CircularQueue");
const queue = new CircularQueue(5);
describe("Test CircularQueue in case : queue is empty", () => {
  it("isEmpty() should return true", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });
  it("isFull() should return false", () => {
    expect(queue.isFull()).toBeFalsy();
  });
  it("size() should return 0", () => {
    expect(queue.size()).toBe(0);
  });
  it("peek() should return undefined", () => {
    expect(queue.peek()).toBe(undefined);
  });
  it("dequeue() should throw an error", () => {
    expect(() => queue.dequeue()).toThrow(new Error("Queue is empty"));
  });
  it("toArray() should return an empty array", () => {
    expect(queue.toArray()).toEqual(new Array());
  });
});
describe("Test CircularQueue in case : Queue is Full", () => {
  function container() {
    queue.enqueue(10);
    queue.enqueue(8);
    queue.enqueue(-1);
    queue.enqueue(16);
    queue.enqueue(12);
  }

  it("isEmpty() should return false", () => {
    container();
    expect(queue.isEmpty()).toBeFalsy();
  });
  it("isFull() should return true", () => {
    expect(queue.isFull()).toBeTruthy();
  });
  it("size() should return 5", () => {
    expect(queue.size()).toBe(5);
  });
  it("peek() should return 10", () => {
    expect(queue.peek()).toBe(10);
  });
  it("dequeue() should remove first element and return 10", () => {
    expect(queue.dequeue()).toBe(10);
  });
  it("size() should return 4", () => {
    expect(queue.size()).toBe(4);
  });
});
